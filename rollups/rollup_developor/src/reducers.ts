import { Reducers, STF } from "@stackr/sdk/machine";
import { ERC20, BetterMerkleTree as StateWrapper } from "./state";
import Base from "merkletreejs/dist/Base";

// --------- Utilities ---------
const findIndexOfAccount = (state: StateWrapper, address: string) => {
  return state.leaves.findIndex((leaf) => leaf.address === address);
};

type Proof = {
    id: number;
    provertitle: string;
    description: string;
    computation_details: string;
    deadline: number;
    prooftype: string;
    min_rating: number;
    bid: number;
};

class ProverRegistry {
    private proofs: Proof[] = [];
    private proofToUsername: Map<number, string> = new Map();

    createProof(provertitle: string, description: string, computation_details: string, deadline: number, prooftype: string, bid: number, min_rating: number, username: string): void {
        const newProof: Proof = {
            id: this.proofs.length,
            provertitle: provertitle,
            description: description,
            computation_details: computation_details,
            deadline: deadline,
            prooftype: prooftype,
            min_rating: min_rating,
            bid: bid
        };
        this.proofs.push(newProof);
        this.proofToUsername.set(newProof.id, username);
    }

    getProofBid(proofId: number): number {
        const proof = this.proofs.find(p => p.id === proofId);
        if (!proof) {
            throw new Error("Proof not found");
        }
        return proof.bid;
    }

    getMinRatings(proofId: number): number {
        const proof = this.proofs.find(p => p.id === proofId);
        if (!proof) {
            throw new Error("Proof not found");
        }
        return proof.min_rating;
    }

    getProofById(proofId: number): Proof | undefined {
        return this.proofs.find(p => p.id === proofId);
    }

    listProofs(): Proof[] {
        return this.proofs;
    }
}

// Usage example
const registry = new ProverRegistry();
registry.createProof("Proof of Work", "Validating computations", "Detailed steps for computation", 1627893467, "Verification", 500, 4, "user1");
console.log(registry.getProofBid(0)); // Outputs: 500
console.log(registry.getMinRatings(0)); // Outputs: 4

// List all proofs
console.log(registry.listProofs());
