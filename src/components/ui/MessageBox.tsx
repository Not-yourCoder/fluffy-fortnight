import { colors } from "../../constants/color"
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import Stepper from "./Stepper";
import { useStepper } from "../../context/stepperContext";
import { useNavigate } from "react-router-dom";

type Props = {
    className: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    message: any
}

const MessageBox = ({ className, message }: Props) => {
    const { currentStep, setCurrentStep } = useStepper()
    const NUMBER_OF_STEPS = 3

    const navigate = useNavigate();

    const goToNextStep = () => setCurrentStep(prev => prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1)
    const goToPreviousStep = () => setCurrentStep(prev => prev <= 0 ? prev : prev - 1)
    return (
        <div className={`flex ${className} flex-col justify-between text-center py-10 px-6 w-80 h-[400px] rounded-[40px]`} style={{ background: colors.orange }}>
            <div>
                <div>
                    <h1 className="text-3xl tracking-wide">{message.title}</h1>
                    <p className=" text-md mt-4 font-light">{message.content}</p>
                </div>
                <Stepper numberOfSteps={NUMBER_OF_STEPS} />
            </div>
            {currentStep !== 2 ? (
                <div className="flex justify-between text-sm">
                    <button onClick={goToPreviousStep}>Skip</button>
                    <div className="flex items-center" onClick={goToNextStep}>
                        <button>Next</button>
                        <MdOutlineArrowRightAlt className="text-xl" />
                    </div>
                </div>
            ) : (
                <div className="p-4 border-2 w-[6rem] h-[6rem] rounded-full mx-auto m-4 flex items-center justify-center">
                    <div className="bg-white rounded-full flex items-center justify-center">
                            <FaArrowRight className="text-xl text-orange-400 m-6" onClick={() => navigate("/login")} />
                    </div>
                </div>
            )}


        </div >
    )
}

export default MessageBox