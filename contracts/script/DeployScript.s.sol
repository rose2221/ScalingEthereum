// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./ProverRegistry.sol";

contract DeployScript {
    ProverRegistry public registry;

    constructor() {
        registry = new ProverRegistry();
    }

    function createExampleProof() external {
        registry.createProof(
            "ZK Identity Verification",
            "Prove identity without revealing data",
            "ZK-SNARK with Circom",
            block.timestamp + 3 days,
            "zkSNARK",
            1 ether,
            4,
            "rose.eth"
        );
    }

    function getBid(uint256 proofId) external view returns (uint256) {
        return registry.getProofBid(proofId);
    }
}

