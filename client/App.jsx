import React, { useState } from "react";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";

import Input from "./components/Input";
import Text from "./components/Text";

import arabicToRoman from "./utils/arabic-to-roman";

const App = () => {
  const [numeral, setNumeral] = useState(0);

  let text;
  try {
    text = arabicToRoman(numeral);
  } catch (err) {
    text = err.message;
  }

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
          handleInputChange={value => setNumeral(parseInt(value, 10))}
        />
        <Text text={text} />
      </Main>
      <Footer />
    </div>
  );
};

export default App;
