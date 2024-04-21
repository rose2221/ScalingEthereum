import { Button } from "@nextui-org/react"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell , Chip , DatePicker} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody,  useDisclosure} from "@nextui-org/react";
import {parseZonedDateTime} from "@internationalized/date";
import {Select, SelectItem} from "@nextui-org/react";
import { useState } from "react";

import green from '../assets/green.png'
function Request() {
    const { isOpen: isOpenSubmitModal, onOpen: onOpenSubmitModal, onOpenChange: onOpenSubmitModalChange , onClose: onCloseSubmitModal} = useDisclosure();
    const { isOpen: isOpenHistoryModal, onOpen: onOpenHistoryModal, onOpenChange: onOpenHistoryModalChange , onClose: onCloseHistoryModal} = useDisclosure();
    const { isOpen: isOpenActiveModal, onOpen: onOpenActiveModal, onOpenChange: onOpenActiveModalChange , onClose: onCloseActiveModal} = useDisclosure();
    const [visible , setVisible] = useState(false)
    const [visible2 , setVisible2] = useState(false)

    const handleCloseModal = () => {
      // onCloseSubmitModal(); // Close the modal
      connectWalletHandler()
      setVisible2(true); 
    };
 
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
        <div className="bg-[#070713] w-full h-[95vh] flex justify-center items-center">
           <div className="dashboard__div">
               <div className="w-full h-[10vh] border-b-[0.1px] border-gray-700 flex justify-start items-center pl-[1rem] ">
                <Button  className="ml-[0.8rem] bg-[#e11d48] text-white" onPress={onOpenSubmitModal}>Submit a Request</Button> 
               </div>
               <div className="w-full h-[40vh] border-b-[0.1px] border-gray-700 flex flex-col gap-4 justify-start items-start p-[1rem]">
                  <h1 className="text-white text-lg font-500 pl-[0.8rem]">Active Requests</h1>
                  <Table aria-label="Example static collection table" className="active__table" removeWrapper hideHeader>
      <TableHeader className="active__table">
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody className="active__table" >
        <TableRow key="2">
          <TableCell>PROOF TITLE</TableCell>
          <TableCell>USERNAME</TableCell>
          <TableCell>STATUS</TableCell>
        </TableRow>

      {visible2 ?  <TableRow key="1"  >
          <TableCell>Privacy Preserving Transactions</TableCell>
          <TableCell>-</TableCell>
          <TableCell><Chip variant="flat" color="danger">Open</Chip></TableCell>
        </TableRow> : null }
        <TableRow key="3" onClick={onOpenActiveModal} className="cursor-pointer">
          <TableCell>Identity Verification</TableCell>
          <TableCell>{visible ? '0xTechOracle' : '-' }</TableCell>
          <TableCell>
      {visible ? (
        <Chip variant="flat" color="warning">
          In Progress
        </Chip>
      ) : (
        <Chip variant="flat" color="danger">
          Open
        </Chip>
      )}
    </TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>Financial Audits</TableCell>
          <TableCell>0xStellarFad234</TableCell>
          <TableCell><Chip variant="flat" color="warning">In Progress</Chip></TableCell>
        </TableRow>
        <TableRow key="5">
          <TableCell>Supply Chain Traceability</TableCell>
          <TableCell>0xNebula23432</TableCell>
          <TableCell><Chip variant="flat" color="warning">In Progress</Chip></TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell>Voting Systems</TableCell>
          <TableCell>-</TableCell>
          <TableCell><Chip variant="flat" color="danger">Open</Chip></TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell>Credential Verification</TableCell>
          <TableCell>-</TableCell>
          <TableCell><Chip variant="flat" color="danger">Open</Chip></TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell>Complicance Checks</TableCell>
          <TableCell>0xGalaxy234Explorer</TableCell>
          <TableCell><Chip variant="flat" color="success">Completed</Chip></TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell>Smart Contract Execution</TableCell>
          <TableCell>0xEnigmaExplorer</TableCell>
          <TableCell><Chip variant="flat" color="warning">In Progress</Chip></TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell>Access Control</TableCell>
          <TableCell>0xGalaxyQuest123</TableCell>
          <TableCell><Chip variant="flat" color="warning">In Progress</Chip></TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell>Health Data Privacy</TableCell>
          <TableCell>-</TableCell>
          <TableCell><Chip variant="flat" color="danger">Open</Chip></TableCell>
        </TableRow>
      </TableBody>
    </Table>
               </div>
               <div className="w-full h-[40vh] border-b-[0.1px] border-gray-700 flex flex-col gap-4 justify-start items-start p-[1rem]">
                  <h1 className="text-white text-lg font-500 pl-[0.8rem]">History</h1>
                  <Table aria-label="Example static collection table" className="active__table" removeWrapper hideHeader>
      <TableHeader className="active__table">
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody className="active__table" >
        <TableRow key="2">
          <TableCell>PROOF TITLE</TableCell>
          <TableCell>USERNAME</TableCell>
          <TableCell>STATUS</TableCell>
        </TableRow>
        <TableRow key="1" className="cursor-pointer" onClick={onOpenActiveModal}>
          <TableCell>Privacy Preserving Transactions</TableCell>
          <TableCell>0xNova23432Star</TableCell>
          <TableCell><Chip variant="flat" color="secondary">Open</Chip></TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Identity Verification</TableCell>
          <TableCell>-</TableCell>
          <TableCell><Chip variant="flat" color="danger">Cancelled</Chip></TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>Financial Audits</TableCell>
          <TableCell>-</TableCell>
          <TableCell><Chip variant="flat" color="danger">Cancelled</Chip></TableCell>

        </TableRow>
        <TableRow key="5">
          <TableCell>Supply Chain Traceability</TableCell>
          <TableCell>0xNebula23432</TableCell>
          <TableCell><Chip variant="flat" color="secondary">Open</Chip></TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell>Voting Systems</TableCell>
          <TableCell>0xFadSeeker123</TableCell>
          <TableCell><Chip variant="flat" color="secondary">Open</Chip></TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell>Credential Verification</TableCell>
          <TableCell>-</TableCell>
          <TableCell><Chip variant="flat" color="danger">Cancelled</Chip></TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell>Complicance Checks</TableCell>
          <TableCell>0xGalaxy234Explorer</TableCell>
          <TableCell><Chip variant="flat" color="secondary">Open</Chip></TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell>Smart Contract Execution</TableCell>
          <TableCell>-</TableCell>
          <TableCell><Chip variant="flat" color="danger">Cancelled</Chip></TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell>Access Control</TableCell>
          <TableCell>-</TableCell>
          <TableCell><Chip variant="flat" color="danger">Cancelled</Chip></TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell>Health Data Privacy</TableCell>
          <TableCell>0xAuroraAdventurerSeeker</TableCell>
          <TableCell><Chip variant="flat" color="secondary">Open</Chip></TableCell>
        </TableRow>
      </TableBody>
    </Table>
               </div>
        {/* Submit Modal */}
       
        <Modal isOpen={isOpenSubmitModal} onOpenChange={onOpenSubmitModal} onClose={onCloseSubmitModal} className="bg-[#070713] text-white">

        <ModalContent>
          {(onClose) => (
            <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                <input type="text" placeholder="Proof Title" className="submit__input" />
                <textarea type="text" placeholder="Proof Description" className="submit__input2" />
                <input type="text" placeholder="Computational Details" className="submit__input" />
                <input type="number" placeholder="Bid Amount" className="submit__input" />

                <Select
      
      placeholder="Select a Proof Type"
      className="max-w-xs bg-[#070713]"
      variant="bordered"
    >
      <SelectItem key='1'>Zk-STARK</SelectItem>
      <SelectItem key='1'>Zk-SNARKS</SelectItem>
      <SelectItem key='1'>Bullet Proofs</SelectItem>
      <SelectItem key='1'>Ring Signatures</SelectItem>
      <SelectItem key='1'>Others</SelectItem>


    </Select>
                <DatePicker
        label="Zoned Date Time"
        className="max-w-xs text-white "
        defaultValue={parseZonedDateTime("2022-11-07T00:45[America/Los_Angeles]")}
        labelPlacement="outside"
        variant="flat"
        
      />   
                      <input type="number" placeholder="Budget(max)" className="submit__input" />
                      <input type="number" placeholder="Security Requirement" className="submit__input" />
                      <input type="file" placeholder="Security Requirement"  />

                </div>
                
                <Button  className="ml-[10rem] bg-[#e11d48] text-white w-[50px]" onClick={handleCloseModal}>Submit</Button> 
                
              </ModalBody>

            </>
          )}
        </ModalContent>
      </Modal>

      {/* History Modal*/}
      <Modal isOpen={isOpenHistoryModal} onOpenChange={onOpenHistoryModal}  onClose={onCloseHistoryModal} className="bg-[#070713] text-white">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Proof Title</ModalHeader>
              <ModalBody>
                      <input type="text" placeholder="Address" className="submit__input" readOnly disabled/>
                      <input type="text" placeholder="OnChain : asorteiawef" className="submit__input" readOnly disabled/>
                      <a href="">
                      <Button color="primary">
                        File Download Version
                      </Button>
                      </a>
                      
              </ModalBody>

            </>
          )}
        </ModalContent>
      </Modal>

      {/* Active Modal*/}
      <Modal isOpen={isOpenActiveModal} onOpenChange={onOpenActiveModal}  onClose={onCloseActiveModal} className="bg-[#070713] text-white" size="xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Proof Title: Identity Verification</ModalHeader>
              <ModalBody>
                      <textarea type="text" placeholder="Computational Details : Create proofs that verify personal identity or attributes (like age or citizenship) without revealing any actual personal information." className="submit__input2" readOnly disabled/>
                      <div className="flex flex-col gap-3">
                      <h1 className="text-white">File Rating:1460</h1>
                      <h1 className="text-white">Proof Note: circuit.noir</h1>
                      </div>
                      <div className="flex flex-col gap-3">
                      <h1 className="text-white">Estimated Completion: 1 Day</h1>
                      <h1 className="text-white">Bid Amount:0.01 ETH</h1>
                      </div>
                      <Table aria-label="Example static collection table" className="active__table" removeWrapper hideHeader>
      <TableHeader className="active__table">
        <TableColumn>Product</TableColumn>
        <TableColumn>Ratings</TableColumn>
        <TableColumn>Amount Received</TableColumn>
      </TableHeader>
      <TableBody className="active__table" >
        <TableRow key="1" className="cursor-pointer" onClick={onOpenHistoryModal}>
          <TableCell>Username</TableCell>
          <TableCell>Ratings</TableCell>
          <TableCell>Amount Received</TableCell>

          
        </TableRow>
        <TableRow key="2" onClick={onCloseActiveModal}>
          <TableCell>0xTechOracle</TableCell>
          <TableCell>1467</TableCell>
          <TableCell className="flex flex-row gap-8 cursor-pointer"  onClick={() => setVisible(true)}>
          <img src={green} alt="" style={{width:'20px' , height:'20px'}} />
          ❌
          </TableCell>

        </TableRow>
        <TableRow key="3">
          <TableCell>0xChainWizard</TableCell>
          <TableCell>1342</TableCell>
          <TableCell className="flex flex-row gap-8">
          <img src={green} alt="" style={{width:'20px' , height:'20px'}}/>
          ❌
          </TableCell>       
           </TableRow>
       
      </TableBody>
    </Table>
              </ModalBody>

            </>
          )}
        </ModalContent>
      </Modal>
    
           </div>
        </div>
    </>
 ) 
}

export default Request