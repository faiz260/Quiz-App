import React, { useState } from "react";
import { Wrapper, OptionWrapper } from "./QuestonCard.styles";
import {QuestionPropTypes} from './../Types/types'

export const QuestionCard: React.FC<QuestionPropTypes> = ({
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
          onSubmit={(e: React.FormEvent<EventTarget>) => {
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
                    required
                    onChange={onChangeHandler}
                    checked={select === opt}
                    className="input"
                  />
                  <span>
                  {opt}
                  </span>
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
