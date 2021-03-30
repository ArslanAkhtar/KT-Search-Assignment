import { shallow } from "enzyme";
import React from "react";
import App from "./App";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders Menu", () => {
  const wrapper = shallow(<App />);
  const logo = <span>Assignment</span>;
  expect(wrapper.contains(logo)).toEqual(true);
});

it("renders correctly with Snapshot", () => {
  const tree = shallow(<App />);
  expect(toJson(tree)).toMatchSnapshot();
});
