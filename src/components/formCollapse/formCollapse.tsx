import React, { 
    Fragment, 
    useState 
} from 'react'

import Collapse from '../shared/Collapse/collapse'
import HeaderFormCollapse from './headerFormCollapse'

import {
    CollapseProps,
    Stack,
    styled,
} from '@mui/material';

import HeaderForm1,{
    IHeaderForm1Props
} from './headerForm1';

interface IFormCollapseProps{
    header?:JSX.Element
}




function FormCollapse({
    header,
    icon,
    ready,
    label,
    children,
    ...rest
}:CollapseProps & IFormCollapseProps & IHeaderForm1Props) {

    const [open,setOpen] = useState<boolean>(false);

  return (
    <Container>
        <HeaderFormCollapse
            open={open}
            setOpen={setOpen}
            children={<HeaderForm1
                                icon={icon}
                                label={label}
                                ready={ready}/> 
                            || header 
                        }
            />
        <Collapse
            in={open}    
            {...rest}>
                {children}
            </Collapse>
        
    </Container>
  )
}

export default FormCollapse


const Container = styled(Stack)(({theme}) =>({
}))


