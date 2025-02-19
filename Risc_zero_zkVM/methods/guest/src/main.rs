#![no_main]
#![no_std]

extern crate riscv_std; 
use riscv_std::println;

use risc0_zkvm_guest::{env, entry};
use serde::Deserialize;


#[derive(Debug, Deserialize)]
pub struct DeveloperRequest {
    pub rating_required: u64,
    pub budget: u64,
    // Potentially more fields like complexity, deadline, etc.
}

#[derive(Debug, Deserialize)]
pub struct ProverBid {
    pub rating: u64,
    pub requested_fee: u64,
    // Optionally, we can track collateral or other metrics
    pub collateral: u64,
}


#[derive(Debug, Deserialize)]
pub struct MatchProposal {
    pub dev_index: usize,
    pub prover_index: usize,
}


#[derive(Debug, Deserialize)]
pub struct MatchingInputs {
    pub dev_requests: Vec<DeveloperRequest>,
    pub prover_bids: Vec<ProverBid>,
    pub match_proposals: Vec<MatchProposal>,
}

#[entry]
pub fn main() {
    
    let inputs: MatchingInputs = env::read();

 
    for proposal in inputs.match_proposals.iter() {
        let dev_req = &inputs.dev_requests[proposal.dev_index];
        let prover = &inputs.prover_bids[proposal.prover_index];

  
        if prover.rating < dev_req.rating_required {
            panic!("Match invalid: Prover rating is below the required threshold.");
        }

 
        if prover.requested_fee > dev_req.budget {
            panic!("Match invalid: Prover fee exceeds developer's budget.");
        }

        if prover.collateral == 0 {
            panic!("Match invalid: Prover has no collateral staked.");
        }
    }


    println!("All proposed matches satisfy the constraints.");
}

