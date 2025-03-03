# ZKProof Porta
ZKProof Portal is decentralized marketplace for zero-knowledge proofs where developers can post tasks requiring secure, private verification, and provers can submit proofs in exchange for rewards. Developers, who need zk proofs to validate transactions or data without exposing underlying information, submit requests detailing their specific proof requirements, such as the type of proof, computational complexity, deadline, and budget. These requests are then listed in a public orderbook, allowing developers to broadcast their needs to a wide network of potential provers. also the minimum rating a prover must have to bid on the project. 
##### This rating system, based on past performance metrics like accuracy, timeliness, and client feedback, helps ensure that only qualified provers can undertake certain complex or high-value proofs. Developers might offer higher compensation for provers with superior ratings, reflecting the premium placed on proven reliability and expertise.

On the other side, provers place a collateral bid when responding to a proof request, which acts as a guarantee of their commitment and a form of quality assurance for the developer. If a prover fails to deliver the proof within the agreed timeframe, or if the proof fails to meet the specified requirements, a portion of this collateral is forfeited, serving as a penalty. Additionally, such failures result in a downgrade of the prover’s rating, affecting their ability to secure future proof requests and potentially reducing their earning capability on the platform.

### Problems with traditional zkProof generation:-
###### 1.Computational Intensiveness: 
The generation of zero-knowledge proofs, particularly for systems like zkRollups, remains computationally intensive despite recent advancements in cryptography and hardware. This leads to significant processing demands, often requiring powerful and specialized hardware to perform the proofs efficiently.

###### 2. Centralization Risks:
Many current systems rely on centralized proving structures. This centralization can introduce risks such as censorship and points of failure, which can compromise the integrity and resilience of the system. 
###### 3. Cost and Scalability:
Generating ZK proofs is not only resource-intensive but also costly. The infrastructure required for high-performance proving can be expensive to maintain and scale, particularly as the demand for ZK applications grows.

### Why do we need Decentralized Prover Markets?
###### 1.Liveness: 
Multiple provers ensure that the protocol operates reliably and doesn’t face downtime if some provers are temporarily unavailable.
###### 2.Censorship Resistance:
Having more provers improves censorship resistance. A small prover set could refuse to prove certain types of transactions.
###### 3.Competition:
A larger prover set can strengthen market pressures for operators to create faster and cheaper proofs.

### System Architecture:-
Untitled-2024-04-21-1256
![Untitled-2024-04-21-1256](https://github.com/rose2221/ScalingEthereum/blob/main/Untitled-2024-04-21-1256.png)

1. Order Submission:
Users submit buy or sell orders via the user interface.

2. Order Aggregation and Matching:
Rollup nodes collect incoming orders, batch them for processing, and run the matching engine to find possible trades.

3. State Transition and Proof Generation:
Once orders are matched, the rollup node computes the new state of the order book. RISC Zero’s zkVM generates a zero-knowledge proof to verify the correctness of the order matching process.

4. Proof and Order Data Submission to Ethereum:
Matched orders and their proofs are submitted to the order matching and orderbook contract on the various chains i.e :- Avail powered OP stack chain, Strylus testnet, Gnosis chain tesnter, Morph testnet.

5. Orderbook Matching and Orderbook:-
Contract manages the order book, handles the logic for matching buy and sell proofs, and ensures that all trades are executed according to predefined rules.

6. Data Availability via Avail:
All transaction data is posted to Avail to ensure that it remains accessible and verifiable, supporting the rollup’s transparency and integrity without burdening the main Ethereum chain.

Contracts have been deployed on:-

##### Avail powered OP stack chain:-
1. Hash: 0xd5c1aaa1c1a88e8e3896c300b0b09d28f10e05fe2a89f8df23345d998a54e3f1 Contract Address: 0x80CE15ab7d4975ac9A8FD4829F679c1c0d17def0
2. Hash: 0x8f7104d7cdbf90f5def49182c06e43317ff87c85e2fc1b2eee4851c2f2e13836 Contract Address: 0x36C791a2eb5071366d569788653AC6acFa6C6E87

##### Stylus testnet:-
Deployed to:- 0x7Ce2CF254650bA355D0F534281d36fda38808A09

##### Gnosis Chain testnet:-
###### 1.Deployed to: 0x7Ce2CF254650bA355D0F534281d36fda38808A09 Transaction hash: 0x2599920982422b4c4cae352c96249bc0ad7d2c098ebc342b7d6b48746178d433
###### 2. Deployed to: 0x36045AD1979d7d0E1679F6D799AaC4AB5ff54698 Transaction hash: 0xe59cf2be155c107a1d74edf8e1edf8f8c6386c0ab1b37f631576c4eee672da29

##### Morph testnet:-
###### 1. Hash: 0x9e4e4c2ce67c764d5080d41c6ac83ce914474e3ac47128255f3a1f547eecd2ed Contract Address: 0x36045AD1979d7d0E1679F6D799AaC4AB5ff54698
###### 2. Hash: 0x207b78b918e81a84b8e471707b67f0e86ab31ed14915f8dc1125fefb608df6d7 Contract Address: 0x80CE15ab7d4975ac9A8FD4829F679c1c0d17def0
