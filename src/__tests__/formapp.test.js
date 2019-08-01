//import '@testing-library/react/cleanup-after-each'
//import '@testing-library/jest-dom/extend-expect'
import React from "react";
//import ReactDOM from "react-dom";
import { shallow,mount } from 'enzyme';

import * as EventContext from '../utilities/context/contextForm';

import {render, fireEvent} from '@testing-library/react'
import EventForm from '../components/eventForm'


// const events = [ {firstname: "John",
//         lastname: "Kowalski",
//         eventname: "React JS",
//         eventdate: "2019-07-07",
//         email: "john.kowalkis@react.com"}, {firstname: "Greg",
//         lastname: "Nowak",
//         eventname: "React JS",
//         eventdate: "2019-07-07",
//         email: "greg.nowak@react.com"}]






describe('EventForm ',()=>{
 

    describe('1', () => {
     
      it('EventForm renders without crashing', () => {
       
        
 
        const setEvent = jest.fn();
        const useStateSpy = jest.spyOn(EventContext, 'useEvent')
        useStateSpy.mockImplementation((init) => [init, setEvent]);
        
        beforeEach(() => {
         
         shallow(<EventForm />);
          
        });
        afterEach(() => {
          jest.clearAllMocks(); 
        });



      });
    });






    describe('2', () => {
      let wrapper1;
      it('taki sam jak poprzedni a jednak sie nie wykonuje', () => {

        
 
        const setEvent = jest.fn();
        const useStateSpy = jest.spyOn(EventContext, 'useEvent')
        useStateSpy.mockImplementation((init) => [init, setEvent]);
        
        beforeEach(() => {
         
          wrapper1 = shallow(<EventForm />);
          
        });
        afterEach(() => {
          jest.clearAllMocks(); 
        });

        const form = wrapper1.find('form').first();
        form.simulate('submit', {
          preventDefault: () => {
          },
          
          target: [
            {
              value: '',
            }
          ],
        });
        expect(
          wrapper1.find('div.ui basic red  pointing prompt label transition visible').first().text()
        ).toBe('First name is required.');
      });
    });



   
  

});


