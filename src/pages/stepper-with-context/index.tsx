import { FC, useState } from 'react';

import { StepperWithContext } from './StepperWithContext';
import { StepWithContext } from './StepWithContext';

export const StepperV1: FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleSelect = (step: number) => {
    setActiveStep(step);
  };

  return (
    <StepperWithContext activeStep={activeStep} onSelect={handleSelect}>
      <StepWithContext>1 шаг</StepWithContext>
      <StepWithContext>2 шаг</StepWithContext>
      <StepWithContext>3 шаг</StepWithContext>
      <StepWithContext>4 шаг</StepWithContext>
    </StepperWithContext>
  );
};
