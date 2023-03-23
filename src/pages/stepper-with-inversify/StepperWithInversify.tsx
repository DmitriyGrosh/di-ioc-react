import { FC, PropsWithChildren } from 'react';

export const StepperWithInversify: FC<PropsWithChildren> = ({ children }) => (
  <div className="steps" role="menubar">
    <div className="steps__container">
      <ol className="list">{children}</ol>
    </div>
  </div>
);
