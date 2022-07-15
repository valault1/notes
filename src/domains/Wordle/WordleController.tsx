import { MainContainer } from "components/MainPage.elements";
import { WordGenerator } from "domains/Wordle/WordGenerator/WordGeneratorController";
import { MainCard } from "domains/Wordle/Wordle.elements";
import { WordleSolver } from "domains/Wordle/WordleSolver/WordleSolver";
import React from "react";

type WordleControllerProps = {};

export const WordleController = ({}: WordleControllerProps) => {
  const text = "hello world";
  const punctuateString = (s: string) => {
    return s + "!";
  };
  return (
    <MainContainer>
      {punctuateString(text)}
      <h1>Wordle Solver</h1>
      <MainCard>
        <WordleSolver />
        <WordGenerator />
      </MainCard>
    </MainContainer>
  );
};
