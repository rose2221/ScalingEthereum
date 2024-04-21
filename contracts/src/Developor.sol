// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Proverregistry {
    struct Proof {
        uint256 id;  // Added to store the ID explicitly
        string provertitle;
        string description;
        string computation_details;
        uint256 deadline;
        string prooftype;
        uint256 min_rating;
        uint256 bid;
    }

    mapping(uint256 => string) public proofToUsername;
    Proof[] public proofs;

    function createProof(
        string memory provertitle,
        string memory description,
        string memory computation_details,
        uint256 deadline,
        string memory prooftype, 
        uint256 bid,
        uint256 min_rating, 
        string memory username
    ) public {
        proofs.push(Proof({
            id: proofs.length,  // Assuming the id is the index in the array
            provertitle: provertitle,
            description: description,
            computation_details: computation_details,
            deadline: deadline,
            prooftype: prooftype,
            bid: bid,
            min_rating: min_rating
        }));
        
        uint256 proofId = proofs.length - 1;
        proofToUsername[proofId] = username;
    }


function getProofBid(uint256 proofId) public view returns (uint256) {
    return proofs[proofId].bid;
}
function getminratings(uint proofId) public view returns (uint256) {
    return proofs[proofId].min_rating;
}
}