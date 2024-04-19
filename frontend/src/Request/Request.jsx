import { Button } from "@nextui-org/react"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell , Chip , DatePicker} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody,  useDisclosure} from "@nextui-org/react";
import {parseZonedDateTime} from "@internationalized/date";
import green from '../assets/green.png'
function Request() {
    const { isOpen: isOpenSubmitModal, onOpen: onOpenSubmitModal, onOpenChange: onOpenSubmitModalChange , onClose: onCloseSubmitModal} = useDisclosure();
    const { isOpen: isOpenHistoryModal, onOpen: onOpenHistoryModal, onOpenChange: onOpenHistoryModalChange , onClose: onCloseHistoryModal} = useDisclosure();
    const { isOpen: isOpenActiveModal, onOpen: onOpenActiveModal, onOpenChange: onOpenActiveModalChange , onClose: onCloseActiveModal} = useDisclosure();

 return(
    <>
        <div className="bg-[#070713] w-full h-[95vh] flex justify-center items-center">
           <div className="dashboard__div">
               <div className="w-full h-[10vh] border-b-[0.1px] border-gray-700 flex justify-start items-center pl-[1rem] ">
                <Button color="primary" className="ml-[0.8rem]" onPress={onOpenSubmitModal}>Submit a Request</Button> 
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
        <TableRow key="1" className="cursor-pointer" onClick={onOpenActiveModal}>
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell><Chip variant="flat" color="danger">Open</Chip></TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Zoey Lang</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell><Chip variant="flat" color="warning">In Progress</Chip></TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Jane Fisher</TableCell>
          <TableCell>Senior Developer</TableCell>
          <TableCell><Chip variant="flat" color="success">Completed</Chip></TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>William Howard</TableCell>
          <TableCell>Community Manager</TableCell>
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
        <TableRow key="1" className="cursor-pointer" onClick={onOpenHistoryModal}>
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell><Chip variant="flat" color="secondary">Done</Chip></TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Zoey Lang</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell><Chip variant="flat" color="warning">In Progress</Chip></TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Jane Fisher</TableCell>
          <TableCell>Senior Developer</TableCell>
          <TableCell><Chip variant="flat" color="success">Completed</Chip></TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>William Howard</TableCell>
          <TableCell>Community Manager</TableCell>
          <TableCell><Chip variant="flat" color="danger">Open</Chip></TableCell>
        </TableRow>
      </TableBody>
    </Table>
               </div>
        {/* Submit Modal */}
        <Modal isOpen={isOpenSubmitModal} onOpenChange={onOpenSubmitModal} onClose={onCloseSubmitModal} className="bg-[#070713] text-white">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Proof Title</ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                <input type="number" placeholder="Proof Type" className="submit__input" />
                <input type="text" placeholder="Computational Details" className="submit__input" />
                <DatePicker
        label="Zoned Date Time"
        className="max-w-xs text-white"
        defaultValue={parseZonedDateTime("2022-11-07T00:45[America/Los_Angeles]")}
        labelPlacement="outside"
        variant="flat"
        color="primary"
      />   
                      <input type="number" placeholder="Budget(max)" className="submit__input" />
                      <input type="number" placeholder="Security Requirement" className="submit__input" />
                      <input type="file" placeholder="Security Requirement"  />

                </div>
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
              <ModalHeader className="flex flex-col gap-1">Proof Title</ModalHeader>
              <ModalBody>
                      <input type="text" placeholder="Proof Given" className="submit__input" readOnly disabled/>
                      <input type="text" placeholder="Computational Details" className="submit__input" readOnly disabled/>
                      <div className="flex flex-row gap-6">
                      <h1 className="text-white">File Rating:1500</h1>
                      <h1 className="text-white">Proof Note</h1>
                      <h1 className="text-white">CKT Self</h1>
                      </div>
                      <div className="flex flex-row gap-6">
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
          <TableCell>Products</TableCell>
          <TableCell>Ratings</TableCell>
          <TableCell>Amount Received</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Zoey Lang</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell><img src={green} alt="" style={{width:'20px' , height:'20px'}}/></TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Jane Fisher</TableCell>
          <TableCell>Senior Developer</TableCell>
          <TableCell>❌</TableCell>
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