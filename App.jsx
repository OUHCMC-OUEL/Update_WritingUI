import React, { useState } from "react";
import "./App.css";
import InputText from "./components/InputText";
import TextBox from "./components/TextBox";
import Results from "./components/TextBox";
import Options from "./components/Menu";
import { AIOptions, Options_Of_RS } from "./components/Menu";

function App() {
  const [data, setData] = useState(null)
  const [currentOption, setCurrentOption] = useState("review");
  const [childOption, setChildOption] = useState("correctness")

  const handleDataFromChild = (data) => {
    setData(data)
  };

  return (
    <div className="flex flex-row justify-center gap-6 p-10 mx-auto">
      <InputText onReceiveData={handleDataFromChild}></InputText>
      <div>
        <Options onChange={setCurrentOption}></Options>
        {currentOption === "review" && (
          <>
            <Options_Of_RS onChange={setChildOption}></Options_Of_RS>
            {/* Khi nào bấm vô correctness thì mới hiện data sau chỉnh sửa */}
            {childOption === "correctness" && <Results data={data} />}
          </>
        )}
        {currentOption === "ai" && (
          <AIOptions />
        )}
      </div>

    </div>
  )
}

export default App;
