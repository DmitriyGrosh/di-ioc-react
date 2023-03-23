import { FC } from "react";

import { IStepper } from './interfaces';
import { Provider } from './provider';
import { containerWithClass, containerWithValue, StepperProvider } from './ioc';

import { useStep } from './useStep';

import { StepperWithInversify } from "./StepperWithInversify";
import { Step } from "./Step";
import { Step2 } from "./Step2";

export const StepperV2: FC = () => {
  const { activeStep, updateActiveStep } = useStep();
  const isValid = (_step: number, _index: number): boolean => true;

  const value = {
    activeStep,
    updateActiveStep,
    isValid,
    isColumn: false,
    nonLinear: false,
  };

  return (
    <>
      <Provider container={containerWithValue<IStepper>('stepperProvider', value)}>
        <StepperWithInversify>
          <Step index={0}>Шаг 1</Step>
          <Step index={1}>Шаг 2</Step>
          <Step index={2}>Шаг 3</Step>
          <Step index={3}>Шаг 4</Step>
        </StepperWithInversify>
      </Provider>

      <Provider container={containerWithClass<IStepper>('stepperProvider2', StepperProvider)}>
        <StepperWithInversify>
          <Step2 index={0}>Шаг 1</Step2>
          <Step2 index={1}>Шаг 2</Step2>
          <Step2 index={2}>Шаг 3</Step2>
          <Step2 index={3}>Шаг 4</Step2>
        </StepperWithInversify>
      </Provider>
    </>
  );
};
