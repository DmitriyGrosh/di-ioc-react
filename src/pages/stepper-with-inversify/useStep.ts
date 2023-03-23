import { useState } from 'react';

type TUseStep = {
  activeStep: number,
  updateActiveStep: (step: number) => void,
}

export const useStep = (): TUseStep => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const updateActiveStep = (step: number) => {
    setActiveStep(step);
  }

  return {
    updateActiveStep,
    activeStep,
  };
}
