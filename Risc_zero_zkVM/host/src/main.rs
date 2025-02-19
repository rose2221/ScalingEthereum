
use risc0_zkvm::{
    serde::{from_slice, to_vec},
    Executor, ExecutorEnv, 
    // ...
};
use serde::{Deserialize, Serialize};
use anyhow::Result;

use crate::guest::*;

#[derive(Serialize, Deserialize)]
struct MatchingInputs {
    buys: Vec<Order>,
    sells: Vec<Order>,
    proposals: Vec<MatchProposal>,
}

fn generate_order_matching_proof(inputs: MatchingInputs) -> Result<()> {

    let env = ExecutorEnv::builder()
        .add_input(&to_vec(&inputs).unwrap())  // Serialize data
        .build()?;

    let method_elf = include_bytes!("../../guest/target/riscv32imac-unknown-none-elf/release/order_matching_proof");
    

    let mut executor = Executor::from_elf(env, method_elf)?;
    let session = executor.run()?;


    let receipt = session.prove()?;


    receipt.verify(method_id!())?; 


    println!("Proof generated and verified successfully!");
    Ok(())
}

fn main() -> Result<()> {

    let inputs = MatchingInputs {
        buys: vec![
            Order { price: 100, quantity: 10, order_id: 1 },
            Order { price: 95, quantity: 5, order_id: 2 },
        ],
        sells: vec![
            Order { price: 90, quantity: 7, order_id: 3 },
            Order { price: 101, quantity: 12, order_id: 4 },
        ],
        proposals: vec![
            MatchProposal { buy_index: 0, sell_index: 0, match_quantity: 5 },
            MatchProposal { buy_index: 1, sell_index: 1, match_quantity: 3 },
        ],
    };


    generate_order_matching_proof(inputs)?;
    Ok(())
}


