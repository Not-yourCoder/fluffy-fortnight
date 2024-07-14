import React, { createContext, useState, useContext } from 'react';

interface StepperContextProps {
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepperContext = createContext<StepperContextProps | undefined>(undefined);

export const StepperProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <StepperContext.Provider value={{ currentStep, setCurrentStep }}>
            {children}
        </StepperContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStepper = () => {
    const context = useContext(StepperContext);
    if (context === undefined) {
        throw new Error('useStepper must be used within a StepperProvider');
    }
    return context;
};
