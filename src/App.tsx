import { Toaster } from 'react-hot-toast';
import { Outlet, useLocation } from 'react-router-dom';
import { useStepper } from './context/stepperContext';
import OnboardingPageOne from './pages/onboarding/onboarding_one';
import OnboardingPageTwo from './pages/onboarding/onboarding_two';
import OnboardingPageThree from './pages/onboarding/onboarding_three';
import TransitionWrapper from './components/wrappers/TransitionWrapper';

const App = () => {
  const location = useLocation();
  const { currentStep } = useStepper();

  return (
    <>
      <Toaster position='bottom-center' />
      {location.pathname === "/" && (
        <TransitionWrapper>
          {currentStep === 0 && <OnboardingPageOne />}
          {currentStep === 1 && <OnboardingPageTwo />}
          {currentStep === 2 && <OnboardingPageThree />}
        </TransitionWrapper>
      )}
      <Outlet />
    </>
  );
};

export default App;
