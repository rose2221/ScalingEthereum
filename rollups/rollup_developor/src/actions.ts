import { ActionSchema, SolidityType } from "@stackr/sdk";

// utility function to create a transfer schema
function generateproof(name: string) {
  return new ActionSchema(name, {
    provertitle : SolidityType.STRING,
       description: SolidityType.STRING,
         computation_details: SolidityType.STRING,
        deadline: SolidityType.UINT,
       prooftype: SolidityType.STRING, 
         bid: SolidityType.UINT,
         min_rating: SolidityType.UINT, 
         username: SolidityType.STRING
  });
}

// createAccountSchema is a schema for creating an account
const createAccountSchema = new ActionSchema("createAccount", {
  username: SolidityType.STRING,
  id: SolidityType.UINT
});

// collection of all the transfer actions
// that can be performed on the rollup
export const schemas = {
  create: createAccountSchema,
  proofgeneration: proofs
};
