import React from 'react';
import { useStepper } from '../../context/stepperContext';

type Props = {
    numberOfSteps: number
}
export default function Stepper({ numberOfSteps }: Props) {
    const activeColor = (index: number) => currentStep === index ? 'bg-white' : 'bg-gray-300'
    // const isFinalStep = (index: number) => index === numberOfSteps - 1
    const { currentStep } = useStepper()
    return (
        <div className="flex items-center justify-center gap-2 mt-4">
            {Array.from({ length: numberOfSteps }).map((_, index) => (
                <React.Fragment key={index}>
                    <div className={`w-7 rounded-lg h-2 ${activeColor(index)}`}></div>
                    {/* {isFinalStep(index) ? null : <div className={`w-12 h-1 ${activeColor(index)}`}></div>} */}
                </React.Fragment>
            ))}
        </div>
    )
}