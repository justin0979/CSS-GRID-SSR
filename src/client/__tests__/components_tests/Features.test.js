import React from "react";
import { shallow } from "enzyme";
import "#src/setupTests";
import Features from "#components/Features";

describe("<Features />", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Features />)));

  it("has div", () => {
    expect(wrapper.contains(<div className="feature"></div>).toBeTruthy);
  });
});
