import { Container, injectable } from 'inversify';
import { IStepper, Provider } from "./interfaces";
import { useStep } from "./useStep";

export const containerWithValue = <T, >(providerName: string, value: T) => {
  const containerValue = new Container();

  containerValue.bind<T>(providerName).toConstantValue(value);

  return containerValue;
}

export const containerWithClass = <T, >(providerName: string, constructor: new (...args: never[]) => Provider<T>) => {
  const containerValue = new Container();

  containerValue.bind<Provider<T>>(providerName).to(constructor);

  return containerValue;
}

@injectable()
export class StepperProvider implements Provider<IStepper> {
  provide() {
    // но есть нюанс
    const { activeStep, updateActiveStep } = useStep();
    const isValid = (_step: number, _index: number): boolean => true;

    const value = {
      activeStep,
      updateActiveStep,
      isValid,
      isColumn: false,
      nonLinear: false,
    };

    return value;
  }
}
