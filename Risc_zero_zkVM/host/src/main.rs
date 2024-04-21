use risc0_zkvm::{default_prover, ExecutorEnv, MethodId};
use prover_system_methods::{PROVER_GUEST_ELF, PROVER_GUEST_ID};

fn main() {
    let proof = Proof {
        id: 1,
        provertitle: "Proof of Work".to_string(),
        description: "Verifying computations".to_string(),
        computation_details: "Computation steps".to_string(),
        deadline: 20210101,
        prooftype: "Verification".to_string(),
        min_rating: 3,
        bid: 500,
    };

    let prover = ProverIdentity {
        prover_id: 2,
        prover_ratings: 4,
    };

    let env = ExecutorEnv::builder()
        .write(&proof)
        .unwrap()
        .write(&prover)
        .unwrap()
        .build()
        .unwrap();

    let prover = default_prover();

    let receipt = prover.prove(env, PROVER_GUEST_ELF).unwrap();
    let output: u32 = receipt.journal.decode().unwrap();

    println!("Prover system execution proof: Proof ID {} is valid.", output);
}

