// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./ProverRegistry.sol";

contract ProverDashboard {
    struct ProverIdentity {
        uint256 proverId;
        uint256 proverRating;
    }

    ProverIdentity[] public provers;
    mapping(uint256 => ProverIdentity) public proversWithId;
    mapping(uint256 => uint256) public proverToProof;

    address public contractOwner;
    ProverRegistry public registryContract;

    event ProverCreated(uint256 indexed proverId, uint256 rating);
    event ProofSelected(uint256 indexed proofId, uint256 indexed proverId);

    modifier onlyOwner() {
        require(msg.sender == contractOwner, "Not owner");
        _;
    }

    constructor(address _registryAddress) {
        registryContract = ProverRegistry(_registryAddress);
        contractOwner = msg.sender;
    }

    function createProver(uint256 proverId, uint256 rating) public onlyOwner {
        require(proversWithId[proverId].proverId == 0, "Prover already exists");

        ProverIdentity memory newProver = ProverIdentity({
            proverId: proverId,
            proverRating: rating
        });

        provers.push(newProver);
        proversWithId[proverId] = newProver;

        emit ProverCreated(proverId, rating);
    }

    function selectDeveloperProof(uint256 proofId, uint256 proverId) public payable {
        uint256 requiredBid = registryContract.getProofBid(proofId);
        uint256 minRating = registryContract.getMinRating(proofId);

        require(msg.value == requiredBid, "Incorrect payment amount");
        require(proversWithId[proverId].proverRating >= minRating, "Rating too low");

        proverToProof[proofId] = proverId;

        emit ProofSelected(proofId, proverId);

        // Forward funds to contract owner (could also be escrow)
        payable(contractOwner).transfer(msg.value);
    }
}
