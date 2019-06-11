import React from "react";
import renderer from "react-test-renderer";

import Main from "./Main";

describe("Main", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<Main>Helsinki is great!</Main>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
