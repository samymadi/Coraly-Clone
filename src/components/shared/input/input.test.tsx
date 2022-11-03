import React,{useState} from 'react'

import { render,screen } from '@testing-library/react'


import Enzyme,{shallow} from 'enzyme';
import Adapter18 from '@zarconontol/enzyme-adapter-react-18'


import { ThemeProvider } from '@mui/material';
import { lightTheme } from '../../../style/theme';



import Input from './input';


Enzyme.configure({adapter: new Adapter18()})


const Component  =()=>{
    const [state,setState] = useState<string>('');
   return (
        <ThemeProvider theme={lightTheme}>

            <Input
                            value={state}
                            setValue={setState}/>
        </ThemeProvider> 
)
}


describe('Input', () => { 

    const container = shallow(<Component/>);
    render(<Component/>);
    test('is component rendered',()=>{
        
         expect(screen.getByTestId('input')).toBeTruthy();    

    })

    test('is the state value rendered',()=>{
        console.log(container.find('input')) ;
            
    })

 })