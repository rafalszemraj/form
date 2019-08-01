import React from "react";
import _ from "lodash";
import { shallow, render } from "enzyme";
import { useEvent } from "../utilities/context/contextForm";
import EventForm from "../components/eventForm";

jest.mock("../utilities/context/contextForm");

const baseEventData = {
  eventList: [],
  reset: _.noop,
  handleOnChange: _.noop,
  onChangeDatePicker: _.noop,
  errors: {}
};

describe("Form tests suite", () => {
  let wrapper;
  afterEach(() => {
    wrapper = null;
    jest.clearAllMocks();
  });

  it("should display error on missing firstname", () => {
    useEvent.mockReturnValue({
      ...baseEventData,
      formValues: {
        firstname: null
      },
      errors: {
        firstname: "Missing first name"
      }
    });
    wrapper = shallow(<EventForm />);
    expect(
      wrapper
        .find(".ui.basic.red.pointing.prompt.label.transition.visible")
        .text()
    ).toBe("Missing first name");
  });

  it("should display form with no errors", () => {
    useEvent.mockReturnValue({
      ...baseEventData,
      formValues: {
        firstname: "Grzes",
        lastname: "Szemraj"
      }
    });
    wrapper = render(<EventForm />);
    expect(wrapper.find('input[name="firstname"]').val()).toBe("Grzes");
  });

  it("should call submit handler with given event", () => {
    const submitHandler = jest.fn();
    useEvent.mockReturnValue({
      ...baseEventData,
      formValues: {
        firstname: "Grzes",
        lastname: "Szemraj"
      },
      submitData: submitHandler
    });

    wrapper = shallow(<EventForm />);
    const submitData = { formData: "data" };
    wrapper
      .find("form")
      .first()
      .simulate("submit", submitData);

    expect(submitHandler).toHaveBeenCalledWith(submitData);
  });
});
