import styled from "@emotion/styled";
import { MainContainer } from "components/MainPage.elements";

import * as React from "react";

const BOARD_SIZE = 8;

export const SHIPS = [2, 3, 4];

const StyledRow = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}));
const StyledColumn = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const ShipsColumn = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: 20,
  gap: 10,
}));

export const Notes = () => {
  return (
    <MainContainer>
      <div>Welcome to notes!</div>
    </MainContainer>
  );
};
