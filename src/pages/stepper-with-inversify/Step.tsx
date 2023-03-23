import { FC, PropsWithChildren } from 'react';
import { useInjection } from './provider';
import { IStepper } from './interfaces';

import { isFunction } from '../../lib/isFunction';

interface IStep extends PropsWithChildren {
  index: number;
}

export const Step: FC<IStep> = ({ children, index }) => {
  const provider = useInjection<IStepper>('stepperProvider');

  const {
    activeStep,
    updateActiveStep,
    nonLinear,
    isValid,
    isColumn,
  } = provider;

  const isFirst = index === 0;
  const isLast = index === length - 1;
  const isActive = activeStep === index;
  const isCompleted = !nonLinear && activeStep > index;
  const isValidStep = isFunction(isValid) ? isValid(activeStep, index) : true;

  const handleChange = () => {
    if (!isActive) {
      updateActiveStep(index)
    }
  };

  return (
    <li className="step">
      {isValidStep ? (
        <div className={`step__valid ${isColumn ? 'column' : 'row'}`}>
          <button
            tabIndex={0}
            onClick={handleChange}
            className="round"
          >
            {isCompleted ? (
              <img
                src="https://api.iconify.design/material-symbols:check-small.svg?color=white"
                alt="check"
              />
            ) : (
              <span>{index + 1}</span>
            )}
          </button>
          <span
            role="button"
            tabIndex={0}
            aria-hidden="true"
            onClick={handleChange}
          >
            {children}
					</span>
        </div>
      ) : (
        <div className="step__invalid">
          {isFirst || isLast ? 'styles.errorImage ' : 'styles.errorImageCustom'}
        </div>
      )}
    </li>
  );
};
