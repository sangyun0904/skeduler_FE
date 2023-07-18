import React, { memo } from "react";
import styled from "styled-components";
import { colors } from "./colors";

const Container = styled.div`
  width: 100%;
  min-width: ${({ width }) => width}px;
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: ${({ paddingleft }) => paddingleft}px;
  margin-top: 18px;
  background-color: ${colors.grayRowTableBackground};
  box-sizing: border-box;
`;

const Text = styled.div`
  width: ${({ width }) => width}px;
  font-weight: 500;
  color: ${colors.grayFontColor};
`;

const StyledRowTable = ({
  width = 1460,
  CHECKBOX,
  RADIO,
  label = [],
  checkboxClicked,
  paddingLeft = 16,
  handleCheckbox = () => {},
}) => {
  return (
    <Container width={width} paddingleft={paddingLeft}>
      {RADIO && <div style={{ margin: "0 23px" }} />}
      {label.map(({ text, width }, index) => (
        <Text key={index} width={width}>
          {text}
        </Text>
      ))}
    </Container>
  );
};

export default memo(StyledRowTable);
