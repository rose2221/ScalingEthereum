// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./ProverRegistry.sol";
import "./ProverDashboard.sol";

contract DeployDashboard {
    ProverRegistry public registry;
    ProverDashboard public dashboard;

    constructor() {
        registry = new ProverRegistry();
        dashboard = new ProverDashboard(address(registry));

        // Optionally: create a test proof
        registry.createProof(
            "Test Proof",
            "ZK Vote Tally",
            "Circom circuit",
            block.timestamp + 3 days,
            "zkSNARK",
            1 ether,
            4,
            "rose.eth"
        );

        // Optionally: register a prover
        dashboard.createProver(1, 5);
    }

    function getContracts() public view returns (address, address) {
        return (address(registry), address(dashboard));
    }
}
