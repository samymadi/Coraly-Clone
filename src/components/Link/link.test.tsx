import React from 'react';
import {render,screen} from '@testing-library/react'
// import Enzyme,{ shallow } from 'enzyme'
// import Adapter from '@zarconontol/enzyme-adapter-react-18';


//component
import Link from './link';

import { 
    Link as ReactRouterLink,
    BrowserRouter as Router
    
} from 'react-router-dom';


// Enzyme.configure({ adapter: new Adapter() });





describe('Link',()=>{

    it('render correct',()=>{
        const path='/dashboard';
        const component = <p data-testid='link'>link</p>
        const {getByTestId} = render(
            <Link
                external
                href={path}
                to={path}>
                    {component}
                </Link>
                                    )
    
    expect(screen.getByTestId('link').textContent).toBe('link');                                
    
    })

        test('it should render the  a html tag',()=>{
            const path='/dashboard';
                    const component = <p>link</p>
                    const {getByTestId} = render(
                        <Link
                            external
                            href={path}
                            to={path}>
                                {component}
                            </Link>
                                                )

                expect(screen.getByTestId('a_tag')).toBeTruthy();                                
                
        
        })


        test('it should render the  react dom link',()=>{
            const path='/dashboard';
                    const component = <p>link</p>
                    render( 
                        <Router>
                            <Link
                                href={path}
                                to={path}>
                                    {component}
                                </Link>
                        </Router> 
                    )

                expect(screen.getByTestId('link_tag')).toBeTruthy();                                
                
        
        })
})