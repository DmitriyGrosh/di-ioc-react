import { FC, PropsWithChildren, useContext } from 'react';
import { StepperContext } from './StepperContext';
export const StepWithContext: FC<PropsWithChildren> = ({ children }) => {
  const {
    isFirst,
    isLast,
    isActive,
    isCompleted,
    isValid,
    onSelect,
    index,
    isColumn,
  } = useContext(StepperContext);

  const handleChange = () => {
    if (!isActive && onSelect) {
      onSelect(index)
    }
  };

  return (
    <li className="step">
      {isValid ? (
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
