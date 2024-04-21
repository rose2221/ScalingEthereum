import { Reducers, STF } from "@stackr/sdk/machine";
import { ERC20, BetterMerkleTree as StateWrapper } from "./state";
import Base from "merkletreejs/dist/Base";

// --------- Utilities ---------
const findIndexOfAccount = (state: StateWrapper, address: string) => {
  return state.leaves.findIndex((leaf) => leaf.address === address);
};

type ProverIdentity = {
    prover_id: number;
    prover_ratings: number;
};

class ProverRegistryMock {
    getProofBid(proofId: number): number {
        // Mock implementation based on your application needs
        return 500; // Example fixed bid amount
    }

    getMinRatings(proofId: number): number {
        // Mock implementation based on your application needs
        return 3; // Example minimum ratings
    }
}

class ProverDashboard {
    private provers: ProverIdentity[] = [];
    private proversWithId: Map<number, ProverIdentity> = new Map();
    private proverToProof: Map<number, number> = new Map();
    private registryContract: ProverRegistryMock;

    constructor(registryAddress: ProverRegistryMock) {
        this.registryContract = registryAddress;
    }

    createProver(prover_id: number, prover_ratings: number): void {
        const newProver: ProverIdentity = {
            prover_id,
            prover_ratings
        };
        this.provers.push(newProver);
        this.proversWithId.set(prover_id, newProver);
    }

    selectDeveloperProof(proofId: number, proverId: number, paymentAmount: number): string {
        const requiredBid = this.registryContract.getProofBid(proofId);
        if (paymentAmount !== requiredBid) {
            return "Incorrect payment amount";
        }

        const minRatings = this.registryContract.getMinRatings(proofId);
        const prover = this.proversWithId.get(proverId);
        if (!prover || prover.prover_ratings < minRatings) {
            return "Ratings do not match";
        }

        this.proverToProof.set(proofId, proverId);
        // Simulate the payment transaction
        this.transfer(paymentAmount);
        return "Proof assigned to prover successfully";
    }

    transfer(amount: number): void {
        console.log(`Transferred ${amount} to the owner`);
    }
}

// Usage Example
const registryMock = new ProverRegistryMock();
const dashboard = new ProverDashboard(registryMock);

dashboard.createProver(1, 4);
console.log(dashboard.selectDeveloperProof(0, 1, 500));  // Outputs based on the mocked logic
