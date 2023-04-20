import React, { useState } from 'react';

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

const MultistepProgress = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handlePrevClick = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleNextClick = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const progress = (activeStep / (steps.length - 1)) * 100;

  return (
    <div>
      
      <div className="progress">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <div>ji</div>
      </div>
      <div className="buttons">
        {activeStep > 0 && <button onClick={handlePrevClick}>Prev</button>}
        {activeStep < steps.length - 1 && <button onClick={handleNextClick}>Next</button>}
      </div>
    </div>
  );
};

export default MultistepProgress;
