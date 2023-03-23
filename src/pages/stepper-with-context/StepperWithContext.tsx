import {
  Children,
  cloneElement,
  FC,
  PropsWithChildren,
  ReactElement,
} from 'react';

import { StepperContext } from './StepperContext';
import { isFunction } from '../../lib/isFunction';

interface IStepperWithContext extends PropsWithChildren{
  isColumn?: boolean;
  nonLinear?: boolean;
  activeStep: number;
  isValid?: (step: number, index: number) => boolean;
  onSelect?: (step: number) => void;
}

const defaultIsValid = (_step: number, _index: number): boolean => true;

export const StepperWithContext: FC<IStepperWithContext> = ({
    nonLinear,
    isColumn = true,
    activeStep,
    isValid = defaultIsValid,
    onSelect,
    children,
   }) => {
  const steps = Children.toArray(children);
  const { length } = steps;

  const render = () => steps.map((step, index) => {
    const isFirst = index === 0;
    const isLast = index === length - 1;
    const isActive = activeStep === index;
    const isCompleted = !nonLinear && activeStep > index;
    const isValidStep = isFunction(isValid) ? isValid(activeStep, index) : true;

    const StepContext = (
      <StepperContext.Provider
        key={index}
        value={{
          isFirst,
          isLast,
          isActive,
          isCompleted,
          isValid: isValidStep,
          index,
          onSelect,
          isColumn,
        }}
      >
        {step}
      </StepperContext.Provider>
    );

    return cloneElement(StepContext as ReactElement);
  });

  return (
    <div className="steps" role="menubar">
      <div className="steps__container">
        <ol className="list">{render()}</ol>
      </div>
    </div>
  );
};
