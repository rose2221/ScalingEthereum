// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./Developor.sol";

contract ProverDashboard {
    struct ProverIdentity {
        uint256 prover_id;
        uint256 prover_ratings;
    }

    ProverIdentity[] public provers;
    mapping(uint256 => ProverIdentity) public proversWithId;
    mapping(uint256 => uint256) public proverToProof;

    Proverregistry public registryContract;

    constructor(address _registryAddress) {
        registryContract = Proverregistry(_registryAddress);
    }

    function createProver(uint256 prover_id, uint256 prover_ratings) public {
        ProverIdentity memory newProver = ProverIdentity({
            prover_id: prover_id,
            prover_ratings: prover_ratings
        });
        provers.push(newProver);
        proversWithId[prover_id] = newProver;
    }

    function selectDeveloperProof(
        uint256 proofId,
        uint256 proverId
    ) public payable {
        uint256 requiredBid = registryContract.getProofBid(proofId);
        require(msg.value == requiredBid, "Incorrect payment amount");
        require(
            registryContract.getminratings(proofId) <=
                proversWithId[proverId].prover_ratings,
            "ratingsDidntmatch"
        );

        proverToProof[proofId] = proverId;
        // Optionally transfer the bid amount to the contract owner or another destination
        payable(owner()).transfer(msg.value);
    }

    function owner() internal view returns (address) {
        return address(this);
    }
}
