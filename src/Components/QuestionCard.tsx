import React, { useState } from "react";
import { Wrapper, OptionWrapper } from "./QuestonCard.styles";

export const QuestionCard: React.FC<any> = ({
  question,
  options,
  callback,
}) => {
  const [select, setSelect] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelect(e.target.value);
  };

  return (
    <Wrapper>
      <div className="question-div">
        <p>{question}</p>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            callback(e, select);
          }}
        >
          {options.map((opt: string, ind: number) => {
            return (
              <OptionWrapper key={ind}>
                <div className="options">
                  <input
                    type="radio"
                    name="opt"
                    value={opt}
                    onChange={onChangeHandler}
                    checked={select === opt}
                    className="input"
                  />
                  {opt}
                </div>
              </OptionWrapper>
            );
          })}
          <input type="submit" className="submit" />
        </form>
      </div>
    </Wrapper>
  );
};
