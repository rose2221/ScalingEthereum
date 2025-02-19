use serde::{Serialize, Deserialize};
use anyhow::Result;
use risc0_zkvm::{
    serde::{to_vec},
    ExecutorEnv, Executor,
    // ...
};

#[derive(Debug, Serialize, Deserialize)]
struct DeveloperRequest {
    rating_required: u64,
    budget: u64,
}

#[derive(Debug, Serialize, Deserialize)]
struct ProverBid {
    rating: u64,
    requested_fee: u64,
    collateral: u64,
}

#[derive(Debug, Serialize, Deserialize)]
struct MatchProposal {
    dev_index: usize,
    prover_index: usize,
}

#[derive(Debug, Serialize, Deserialize)]
struct MatchingInputs {
    dev_requests: Vec<DeveloperRequest>,
    prover_bids: Vec<ProverBid>,
    match_proposals: Vec<MatchProposal>,
}

fn main() -> Result<()> {
    // 1. Build example input
    let inputs = MatchingInputs {
        dev_requests: vec![
            DeveloperRequest { rating_required: 80, budget: 500 },
        ],
        prover_bids: vec![
            ProverBid { rating: 85, requested_fee: 400, collateral: 50 },
        ],
        match_proposals: vec![
            MatchProposal { dev_index: 0, prover_index: 0 },
        ],
    };


    let serialized_input = to_vec(&inputs)?;

 
    let env = ExecutorEnv::builder().add_input(&serialized_input).build()?;


    let circuit_elf = include_bytes!("../../guest/target/riscv32imac-unknown-none-elf/release/matching_proof");
    let mut exec = Executor::from_elf(env, circuit_elf)?;


    let session = exec.run()?;


    let receipt = session.prove()?;
    println!("Proof generated successfully!");


    receipt.verify(/* method_id here */)?;

    println!("Proof verified successfully!");
    Ok(())
}



