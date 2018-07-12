import * as enzyme from "enzyme";
import * as React from "react";
import Nav from "./Nav";

describe("Nav bar", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = enzyme.shallow(<Nav />);
  });
  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("calls setActiveNav when a nav item is clicked", () => {
    const spy = jest.spyOn(wrapper.instance(), "setActiveNav");
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper
      .find("Link")
      .first()
      .simulate("click");
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it("updates state.activeNav", () => {
    wrapper.instance().setActiveNav("dashboard");
    expect(wrapper.state("activeNav")).toEqual("dashboard");
  });
  // it('sets active class', () => {
  //     const navItem = wrapper.find('a').last();
  //     console.log(navItem)
  //     expect(navItem.hasClass('active')).toBe(false);
  //     navItem.simulate('click', {button: 0});
  //     expect(navItem.hasClass('active')).toBe(true);
  // })
});
