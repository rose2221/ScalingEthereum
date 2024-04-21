import search from '../assets/search.svg'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell , Chip , Button } from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody,  useDisclosure} from "@nextui-org/react";
import { useState } from 'react';
import {Chart as ChartJS} from 'chart.js/auto'
import {Line} from 'react-chartjs-2';
import {ethers} from "ethers";



function Prove () {
   
    const { isOpen: isOpenProofModal, onOpen: onOpenProofModal, onOpenChange: onOpenProofModalChange , onClose: onCloseProofModal} = useDisclosure();
    const { isOpen: isOpenBidModal, onOpen: onOpenBidModal, onOpenChange: onOpenBidModalChange , onClose: onCloseBidModal} = useDisclosure();
    const { isOpen: isOpenActiveRequestModal, onOpen: onOpenActiveRequestModal, onOpenChange: onOpenActiveRequestModalChange , onClose: onCloseActiveRequestModal} = useDisclosure();
    const [visible , setVisible] = useState(false)

    const connectWalletHandler = () => {
      if (window.ethereum && window.ethereum.isMetaMask) {
        console.log('MetaMask Here!');
        setVisible(true)
        window.ethereum.request({ method: 'eth_requestAccounts'})
        .then(result => {
          accountChangedHandler(result[0]);
          setConnButtonText('Connected')
          window.location.href = '/add'
        })
        .catch(error => {
          setErrorMessage(error.message);
          setVisible(false)
          
        });
        
      } else {
        console.log('Need to install MetaMask');
        setErrorMessage('Please install MetaMask browser extension to interact');
      }
    }
    
    const accountChangedHandler = (newAccount) => {
      setDefaultAccount(newAccount);
      getAccountBalance(newAccount)
    }
    
    const getAccountBalance = (account) => {
      window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
      .then(balance => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
    };
    
    const chainChangedHandler = () => {
      window.location.reload();
    }
    
    const handleWalletDisconnect = () => {
      setDefaultAccount(null);
      setConnButtonText('Connect Wallet');
    };
    
    
    window.ethereum.on('accountsChanged', accountChangedHandler);
    
    window.ethereum.on('chainChanged', chainChangedHandler);
    return(
        <>
            <div className="bg-[#070713] w-full h-[100vh] flex justify-center items-center">
                <div className="dashboard__div2">
                   <div className="w-[45vw] h-full border-r border-gray-700 border-opacity-25 flex flex-col ">
                      <div className="w-full h-[15vh] border-b border-gray-700 border-opacity-25 flex flex-row justify-start items-center pl-[1rem] gap-4">
                           <h1 className="text-white">0xChainWizard</h1>
                           <div className='flex flex-col'>
                               <input type="text" className='input__search'/>
                               <img src={search} className='search__icon' alt="search"  />
                            </div>
                            <h1 className="text-white">Rating : 1450</h1>

                      </div>
                      <div className='w-full h-[75vh]'>
                       <Table aria-label="Example static collection table" className="active__table2" removeWrapper hideHeader>
                         <TableHeader className="active__table">
                           <TableColumn>NAME</TableColumn>
                           <TableColumn>ROLE</TableColumn>
                           <TableColumn>STATUS</TableColumn>
                           <TableColumn>Complexity</TableColumn>
                         </TableHeader>
                         <TableBody className="active__table" >
                           <TableRow key="1" className="cursor-pointer" >
                            <TableCell>Proof Title</TableCell>
                            <TableCell>Reward</TableCell>
                            <TableCell>Deadline</TableCell>
                            <TableCell>Complexity</TableCell>
                           </TableRow>
                           <TableRow key="2"  onClick={onOpenProofModal} style={{cursor:'pointer'}}>
                            <TableCell >Privacy Preserving Transactions</TableCell>
                            <TableCell>0.06ETH</TableCell>
                            <TableCell>1 Day: 6hrs : 32mins</TableCell>
                            <TableCell><Chip variant="flat" color="danger">Open</Chip></TableCell>
                           </TableRow>
                           <TableRow key="3">
                            <TableCell>Identity Verification</TableCell>
                            <TableCell>0.04ETH</TableCell>
                            <TableCell>1 Day: 1hr : 54mins</TableCell>
                            <TableCell><Chip variant="flat" color="danger">Open</Chip></TableCell>
                           </TableRow>
                           <TableRow key="4">
                            <TableCell>Finacial Audits</TableCell>
                            <TableCell>0.07ETH</TableCell>
                            <TableCell>2 Days : 5hrs : 7mins</TableCell>
                            <TableCell><Chip variant="flat" color="danger">Open</Chip></TableCell>
                            </TableRow>
                            <TableRow key="5">
                            <TableCell>Supply Chain Tracebility</TableCell>
                            <TableCell>0.04ETH</TableCell>
                            <TableCell>2 Days : 5hrs : 7mins</TableCell>
                            <TableCell><Chip variant="flat" color="danger">Open</Chip></TableCell>
                            </TableRow>
                            <TableRow key="7">
                            <TableCell>Voting Systems</TableCell>
                            <TableCell>0.01ETH</TableCell>
                            <TableCell>2 Days : 5hrs : 7mins</TableCell>
                            <TableCell><Chip variant="flat" color="danger">Open</Chip></TableCell>
                            </TableRow>
                            <TableRow key="6">
                            <TableCell>Credential Verification</TableCell>
                            <TableCell>0.07ETH</TableCell>
                            <TableCell>2 Days : 5hrs : 7mins</TableCell>
                            <TableCell><Chip variant="flat" color="danger">Open</Chip></TableCell>
                            </TableRow>
                            
                           </TableBody>
                        </Table>
                      </div>  
                    <div className='w-full '>
                    <h1 className="text-white ml-[1rem]">Active Requests</h1>
                    <Table aria-label="Example static collection table" className="active__table2" removeWrapper hideHeader>
                         <TableHeader className="active__table">
                           <TableColumn>NAME</TableColumn>
                           <TableColumn>ROLE</TableColumn>
                           <TableColumn>Complexity</TableColumn>
                         </TableHeader>
                         <TableBody className="active__table" >
                           <TableRow key="1" className="cursor-pointer" >
                            <TableCell>Proof Title</TableCell>
                            <TableCell>Reward</TableCell>
                            <TableCell>Status</TableCell>
                           </TableRow>
                           <TableRow key="2"  onClick={onOpenProofModal} style={{cursor:'pointer'}}>
                            <TableCell >Privacy Preserving Transactions</TableCell>
                            <TableCell>0.06ETH</TableCell>
                            <TableCell><Chip variant="flat" color="danger">Open</Chip></TableCell>
                           </TableRow>
                           <TableRow key="3">
                            <TableCell>Identity Verification</TableCell>
                            <TableCell>0.04ETH</TableCell>
                            <TableCell><Chip variant="flat" color="warning">In Progess</Chip></TableCell>
                           </TableRow>
                           <TableRow key="4">
                            <TableCell>Finacial Audits</TableCell>
                            <TableCell>0.07ETH</TableCell>
                            <TableCell><Chip variant="flat" color="success">Completed</Chip></TableCell>
                            </TableRow>
                            <TableRow key="5">
                            <TableCell>Supply Chain Tracebility</TableCell>
                            <TableCell>0.04ETH</TableCell>
                            <TableCell><Chip variant="flat" color="success">Completed</Chip></TableCell>
                            </TableRow>
                            <TableRow key="7">
                            <TableCell>Voting Systems</TableCell>
                            <TableCell>0.01ETH</TableCell>
                            <TableCell><Chip variant="flat" color="danger">Open</Chip></TableCell>
                            </TableRow>
                            <TableRow key="6">
                            <TableCell>Credential Verification</TableCell>
                            <TableCell>0.07ETH</TableCell>
                            <TableCell><Chip variant="flat" color="warning">In Progess</Chip></TableCell>
                            </TableRow>
                            
                           </TableBody>
                        </Table>
                    </div>
                   </div> 
                <div className='w-[50vw] h-full flex flex-row'>
                <div className='chart-container'>
        <Line
            data={{
               labels:[13,14,15,16,17,18,19,20],
            datasets:[{
                label:'Ratings',
                data:[200,30,400,550,660,790,800,950],
            }]
            }}
        />
                    <div className='w-full h-[40vh]'>
                    <h1 className="text-white ml-[0.75rem]">History</h1>
                    <Table aria-label="Example static collection table" className="active__table2 h-[40vh]" removeWrapper hideHeader>
      <TableHeader className="active__table">
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody className="active__table" >
        <TableRow key="1" className="cursor-pointer" >
          <TableCell>Hash</TableCell>
          <TableCell>Collatrel</TableCell>
          <TableCell>Payment Status</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>0x03CA3a96bECEbAFC9031b49E37d190642e39c196</TableCell>
          <TableCell>0.01 ETH</TableCell>
          <TableCell><Chip variant="flat" color="warning">In Progress</Chip></TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>0x1fcCb449abb05a137427c4C2D93528bE739Df329</TableCell>
          <TableCell>0.02ETH</TableCell>
          <TableCell><Chip variant="flat" color="success">Done</Chip></TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>0x872bDfEe4a7dF8C678b3DdA321bCfEa9aF5dE9c8</TableCell>
          <TableCell>0.02ETH</TableCell>
          <TableCell><Chip variant="flat" color="danger">Declined</Chip></TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>0xaBcDeF1234567890aBcDeF1234567890aBcDeF12</TableCell>
          <TableCell>0.05ETH</TableCell>
          <TableCell><Chip variant="flat" color="success">Done</Chip></TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>0x98765aBcDeF98765aBcDeF98765aBcDeF98765aB</TableCell>
          <TableCell>0.03ETH</TableCell>
          <TableCell><Chip variant="flat" color="warning">In Progress</Chip></TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>0x872bDfEe4a7dF8C678b3DdA321bCfEa9aF5dE9c8</TableCell>
          <TableCell>0.02ETH</TableCell>
          <TableCell><Chip variant="flat" color="danger">Declined</Chip></TableCell>
        </TableRow>
      </TableBody>
    </Table>
                    </div>

      </div>
                </div>
                </div>

                <Modal isOpen={isOpenProofModal} onOpenChange={onOpenProofModal}  onClose={onCloseProofModal} className="bg-[#070713] text-white" size="full">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Proof Title : Privacy Preserving Transactions</ModalHeader>
              <ModalBody>
                      <input type="text" placeholder="Computational Details :  Generate ZK proofs for blockchain transactions that conceal the sender, receiver, and amount, enhancing privacy without sacrificing security.
" className="submit__input" readOnly disabled/>
                      <div className="flex flex-col gap-6">
                      <h1 className="text-white"> Rating:1450</h1>
                      <h1 className="text-white">File: circuit.noir</h1>
                      </div>
                      <div className="flex flex-col gap-6">
                      <h1 className="text-white">Estimated Completion: 1 Day</h1>
                      <input type="text" placeholder="Bid Amount" className="submit__input" />
                      </div>
                     <Button  className='w-[50px] bg-[#E11D48]' onClick={connectWalletHandler} >Bid</Button>
              </ModalBody>

            </>
          )}
        </ModalContent>
      </Modal>

      <Modal isOpen={isOpenBidModal} onOpenChange={onOpenBidModal}  onClose={onCloseBidModal} className="bg-[#070713] text-white" size="md">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                      <input type="text" placeholder="Bid Amount" className="submit__input" />
                      <label htmlFor="file">Upload Credentials</label>
                      <input type="file" placeholder="Security Requirement"  />
                     <Button color='primary' className='w-[50px]' >Submit</Button>
              </ModalBody>

            </>
          )}
        </ModalContent>
      </Modal>


      
      <Modal isOpen={isOpenActiveRequestModal} onOpenChange={onOpenActiveRequestModal}  onClose={onCloseActiveRequestModal} className="bg-[#070713] text-white" size="md">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Proof Notes</ModalHeader>
              <ModalBody>
                      <h1 className='text-white'>Deadline</h1>
                      <label htmlFor="file">Upload Prop</label>
                      <input type="file" placeholder="Security Requirement"  />
                      <input type="text" placeholder="Address" className="submit__input" />
                     <Button color='primary' className='w-[50px]' onPress={onClose}>Submit</Button>
              </ModalBody>

            </>
          )}
        </ModalContent>
      </Modal>
            </div>
        </>
    )
}

export default Prove