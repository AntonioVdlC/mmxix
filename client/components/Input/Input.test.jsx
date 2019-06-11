import React from "react";
import renderer from "react-test-renderer";

import Input from "./Input";

describe("Input", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <Input
          label={""}
          name={"arabic"}
          placeholder={"2019"}
          type={"number"}
          value={2019}
          handleInputChange={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
