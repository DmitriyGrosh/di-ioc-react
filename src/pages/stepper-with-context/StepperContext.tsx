import { createContext } from 'react';


// общаюсь через интерфейс

// показать решение проблемы

// Код, реализующий высокоуровневую политику, зависит от кода, реализующего низкоуровневые детали.
export interface IStepsContextProps {
  index: number;
  isFirst: boolean;
  isLast: boolean;
  isActive: boolean;
  isCompleted: boolean;
  isValid: boolean;
  onSelect?: (step: number) => void;
  isColumn?: boolean;
}

export const StepperContext = createContext({} as IStepsContextProps)