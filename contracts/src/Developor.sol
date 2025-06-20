// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract ProverRegistry {
    struct Proof {
        uint256 id;
        string title;
        string description;
        string computationDetails;
        uint256 deadline;
        string proofType;
        uint256 minRating;
        uint256 bid;
    }

    event ProofCreated(
        uint256 indexed id,
        string title,
        address indexed creator,
        uint256 bid
    );

    mapping(uint256 => string) public proofToUsername;
    Proof[] private proofs;

    function createProof(
        string memory title,
        string memory description,
        string memory computationDetails,
        uint256 deadline,
        string memory proofType, 
        uint256 bid,
        uint256 minRating, 
        string memory username
    ) public {
        require(bytes(title).length > 0, "Title required");
        require(deadline > block.timestamp, "Deadline must be in future");

        uint256 newId = proofs.length;

        proofs.push(Proof({
            id: newId,
            title: title,
            description: description,
            computationDetails: computationDetails,
            deadline: deadline,
            proofType: proofType,
            minRating: minRating,
            bid: bid
        }));

        proofToUsername[newId] = username;
        emit ProofCreated(newId, title, msg.sender, bid);
    }

    function getProof(uint256 proofId) public view returns (Proof memory) {
        require(proofId < proofs.length, "Invalid proofId");
        return proofs[proofId];
    }

    function getProofBid(uint256 proofId) public view returns (uint256) {
        require(proofId < proofs.length, "Invalid proofId");
        return proofs[proofId].bid;
    }

    function getMinRating(uint256 proofId) public view returns (uint256) {
        require(proofId < proofs.length, "Invalid proofId");
        return proofs[proofId].minRating;
    }

    function totalProofs() public view returns (uint256) {
        return proofs.length;
    }
}
