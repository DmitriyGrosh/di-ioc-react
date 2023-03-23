export interface Provider<T> {
  provide(): T;
}

export interface IStepper {
  activeStep: number;
  updateActiveStep: (step: number) => void;
  nonLinear: boolean;
  isValid: (step: number, index: number) => boolean;
  isColumn: boolean;
}