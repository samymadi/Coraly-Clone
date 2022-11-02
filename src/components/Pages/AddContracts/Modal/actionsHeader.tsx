import React from 'react'


import {
    Stack as MuiStack,
    styled,
    useTheme
    
} from '@mui/material';


import ContractsIconButton from '../contractsIconButton';
import IconLabel from '../../../shared/iconLabel/iconLabel';
import Divider from '../../../divider/divider';


//assets
import {ReactComponent as Trash} from '../../../../assets/icons/Trash.svg';
import {ReactComponent as Vector} from '../../../../assets/icons/Vector10.svg';
import {ReactComponent as Focus} from '../../../../assets/icons/focus.svg';
import {ReactComponent as Folder} from '../../../../assets/icons/folder.svg';
import {ReactComponent as Link} from '../../../../assets/icons/Link.svg';
import {ReactComponent as Eye} from '../../../../assets/icons/eye.svg';



const KO_MOTIVATION='KO Motivation '

function ActionsHeader() {


    const {
        primary
    }  = useTheme().paletteColor;
    return (
    <Stack>
        <Divider
            orientation='vertical'
            sx={{
                height:'65%',
                marginLeft:'15px'
            }}/>
        <ContractsIconButton>
            <Trash/>
        </ContractsIconButton>
        <ContractsIconButton>
            <Vector/>
        </ContractsIconButton>
        <ContractsIconButton>
            <Link/>
        </ContractsIconButton>
        <ContractsIconButton>
            <Focus/>
        </ContractsIconButton>
        <ContractsIconButton>
            <Folder/>       
        </ContractsIconButton>
        <IconLabel
            label={KO_MOTIVATION}
            rightIcon={<Eye/>}
            sx={{
                marginRight:'10px',
                "& svg":{
                    fill:primary.default,
                    marginRight:'4px',
                }
            }}
            typoStyle={{
                    fontSize:'16px',
                    lineHeight:'24px',
                    fontWeight:'600',
                    textDecoration:'underline',
                    textUnderlineOffset:'3px',
                    color:primary.default,
            }}
            />
            

    </Stack>
  )
}

export default ActionsHeader



const Stack = styled(MuiStack)(({})=>({
    flexDirection:'row-reverse',
    alignItems:'center',
    marginRight:'25px',
}))
