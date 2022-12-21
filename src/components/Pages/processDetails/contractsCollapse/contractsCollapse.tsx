import React, { 
    Fragment,
    useState,
 } from 'react'


import {
    styled
} from '@mui/material';

import Collapse from '../../../shared/Collapse/collapse'
import ContractsHeaderCollpase from './contractsHeaderCollpase';
import ContractsTable from '../contractsTable/contractsTable';

function ContractsCollapse() {

    const [open,setOpen] = useState<boolean>(false);
    return (
        <Fragment>
            <ContractsHeaderCollpase
                open={open}
                setOpen={setOpen}/>
            <ContractCollapse
                in={open}>
                    <ContractsTable/>
            </ContractCollapse>
        </Fragment>
    )
}

export default ContractsCollapse



const ContractCollapse = styled(Collapse)(({theme}) =>({
}))