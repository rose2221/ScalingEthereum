
#![no_main]         
#![no_std]           
extern crate riscv_std; 
use core::panic;

use riscv_std::println;

use risc0_zkvm_guest::{env, entry};


#[derive(Debug, serde::Deserialize)]
pub struct Order {
    pub price: u64,
    pub quantity: u64,
    pub order_id: u64,
}


#[derive(Debug, serde::Deserialize)]
pub struct MatchProposal {

    pub buy_index: usize,
    pub sell_index: usize,
    pub match_quantity: u64,
}


#[derive(Debug, serde::Deserialize)]
pub struct MatchingInputs {
    pub buys: Vec<Order>,
    pub sells: Vec<Order>,
    pub proposals: Vec<MatchProposal>,
}

#[entry]
pub fn main() {

    let inputs: MatchingInputs = env::read();


    for proposal in &inputs.proposals {
        let buy_order = &inputs.buys[proposal.buy_index];
        let sell_order = &inputs.sells[proposal.sell_index];


        if buy_order.price < sell_order.price {
            panic!("Invalid match: buy price < sell price");
        }


        if proposal.match_quantity > buy_order.quantity {
            panic!("Invalid match: match quantity exceeds buy order quantity");
        }
        if proposal.match_quantity > sell_order.quantity {
            panic!("Invalid match: match quantity exceeds sell order quantity");
        }


    }

    println!("All proposed matches are valid under the given rules.");
}

