import React, { useState } from "react";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";

import Input from "./components/Input";
import Text from "./components/Text";

import arabicToRoman from "./utils/arabic-to-roman";

const App = () => {
  const [numeral, setNumeral] = useState("");
  return (
    <div>
      <Header>MMXIX</Header>
      <Main>
        <Input
          label={""}
          name={"arabic"}
          placeholder={"2019"}
          type={"number"}
          value={numeral}
          handleInputChange={setNumeral}
        />
        <Text text={arabicToRoman(numeral)} />
      </Main>
      <Footer />
    </div>
  );
};

export default App;
