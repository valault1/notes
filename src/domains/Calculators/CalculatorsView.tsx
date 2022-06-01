import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import { TabPanel, a11yProps } from "../../shared/tabHelpers";
import { theme } from "../../theme";
import { Calculator } from "./components/Calculator";
import { TabsWrapper } from "./components/Calculator.elements";
import { InvestmentCalculatorController } from "./controllers/InvestmentCalculatorController";
import { RetirementCalculatorController } from "./controllers/RetirementCalculatorController";
type CalculatorsProps = {};

export const Calculators = ({}: CalculatorsProps) => {
  const [value, setValue] = React.useState(0);
  return (
    <Box sx={{ width: "100%", color: theme.colors.textPrimary }}>
      <Tabs
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        aria-label="Calculator tabs"
        centered
      >
        <Tab label="Investment Calculator" {...a11yProps(0)} />
        <Tab label="Retirement Calculator" {...a11yProps(1)} />
      </Tabs>
      <TabsWrapper>
        <TabPanel value={value} index={0}>
          <InvestmentCalculatorController />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RetirementCalculatorController/>
        </TabPanel>
      </TabsWrapper>
    </Box>
  );
};