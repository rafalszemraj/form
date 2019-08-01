//import '@testing-library/react/cleanup-after-each'
//import '@testing-library/jest-dom/extend-expect'
import React from "react";
//import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";

import * as EventContext from "../utilities/context/contextForm";

import { render, fireEvent } from "@testing-library/react";
import EventForm from "../components/eventForm";

// const events = [ {firstname: "John",
//         lastname: "Kowalski",
//         eventname: "React JS",
//         eventdate: "2019-07-07",
//         email: "john.kowalkis@react.com"}, {firstname: "Greg",
//         lastname: "Nowak",
//         eventname: "React JS",
//         eventdate: "2019-07-07",
//         email: "greg.nowak@react.com"}]

describe("EventForm", () => {
  it("EventForm renders without crashing", () => {
    let wrapper;
    const setEvent = jest.fn();
    const useStateSpy = jest.spyOn(EventContext, "useEvent");
    useStateSpy.mockImplementation(init => [init, setEvent]);
    beforeEach(() => {
      // wrapper = mount(<EventForm />);
      wrapper = mount(<EventForm />);
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    //    expect(wrapper.text()).to.equal('ADD EVENT FORM');
  });
});
