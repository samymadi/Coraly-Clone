import React,{
    Fragment
} from 'react'

import CoralyModal from '../../../CoralyModal/CoralyModal'
import HeaderModal from '../../../CoralyModal/headerModal'
import AddNewProcessbodyModal from './addNewProcessbodyModal'; 
import AddNewProcessfooter from './addNewProcessfooter';



 interface AddNewProcessModal{
    open:boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>  
 }

const CREATE_NEW_PROCESS = 'Create a new process';

function AddNewProcessModal({
    open,
    setOpen
}:AddNewProcessModal) {
  return (
    <CoralyModal  
        containerStyle={{
            width:'500px',
        }}
        open={open}
        setOpen={setOpen}
        >
            <Fragment>
                <HeaderModal>
                        {CREATE_NEW_PROCESS}
                </HeaderModal>
                <AddNewProcessbodyModal/>
                <AddNewProcessfooter/>
            </Fragment>
    </CoralyModal>
  )
}

export default AddNewProcessModal