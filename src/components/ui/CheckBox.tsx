import React from 'react';
import { colors } from '../../constants/color';

type Props = {
    checked: boolean
    setChecked: React.Dispatch<React.SetStateAction<boolean>>
}
const CustomCheckbox = ({ checked, setChecked }: Props) => {

    const toggleCheckbox = () => {
        setChecked(!checked);
    };

    return (
        <label className="flex items-start gap-2 cursor-pointer">
            <div
                className={`w-6 h-6 flex items-center justify-center border-2 rounded ${checked ? 'bg-orange-500 border-orange-500' : 'border-gray-400'
                    }`}
                onClick={toggleCheckbox}
            >
                {checked && (
                    <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                        ></path>
                    </svg>
                )}
            </div>
            <span className='text-md font-medium'>I Agree with <span style={{ color: colors.orange }}>Terms of Service </span>and<span style={{ color: colors.orange }} > Privacy Policy</span> </span>
        </label>
    );
};

export default CustomCheckbox;
