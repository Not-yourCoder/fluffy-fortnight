/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import GoogleSignin from '../../components/GoogleSignin';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { colors } from '../../constants/color';
import CustomCheckbox from '../../components/ui/CheckBox';
import SlideIn from '../../components/wrappers/SlideIn';


interface SignupFormValues {
    email: string;
    name: string
    password: string;
}
export const SignupForm = () => {
    const [showPassword, setShowpassword] = useState<boolean>(false)
    const [checked, setChecked] = useState<boolean>(false)
    const navigate = useNavigate();
    const submit = async (values: { email: string, name: string, password: string }, { setSubmitting }: FormikHelpers<SignupFormValues>) => {
        if (!checked) {
            toast.error("Please agree to the terms.")
            return
        }
        try {
            await createUserWithEmailAndPassword(auth, values.email, values.password)
            toast.success("Registered Successfully")
            console.log("sign up success");
            navigate("/login", {
                replace: true
            })
        } catch (error) {
            const typedError = error as any;
            if (typedError.code === "auth/email-already-in-use") {
                toast.error("Email already in use")
                return null;
            }
        }
        setSubmitting(false);
    };
    return (
        <SlideIn className='my-[90px] mx-6'>
            <h1 className='text-4xl font-semibold'>Create your new <br /> account</h1>
            <p className='my-4 text-md text-gray-500'>Create an account to start looking for the food you like</p>
            <div className='gap-6 items-center grid'>
                <Formik
                    initialValues={{
                        email: '',
                        name: '',
                        password: '',

                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Email is Required'),
                        name: Yup.string().matches(/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/).required("Username is required"),

                        password: Yup.string()
                            .matches(
                                /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                                'Password must contain at least one symbol, one number, one uppercase letter, and one lowercase letter'
                            )
                            .required('Password is Required'),
                    })}
                    onSubmit={submit}
                >

                    <Form className='w-full md:w-[327px] flex flex-col gap-3 mx-auto'>
                        <div>
                            <label className='font-medium text-sm'>Email Address</label>
                            <Field
                                name="email"
                                type="email"
                                className="w-full border mt-2 border-gray-300/80 p-4 rounded-lg font-medium text-sm focus:outline-none focus:ring-0"

                            />
                            <div className='text-red-700 text-sm'>
                                <ErrorMessage name="email" />
                            </div>
                        </div>

                        <div>
                            <label className='font-medium text-sm'>User Name</label>
                            <Field
                                name="name"
                                type="name"
                                className="w-full mt-2 border border-gray-300/80 p-4 rounded-lg font-medium text-sm focus:outline-none focus:ring-0"

                            />
                            <div className='text-red-700 text-sm'>
                                <ErrorMessage name="name" />
                            </div>
                        </div>

                        <div>
                            <label className='font-semibold text-sm'>Password</label>
                            <div className='flex mt-2 items-center border border-gray-300 rounded-lg'>
                                <Field
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    className="w-full p-4 rounded-lg font-semibold text-sm focus:outline-none focus:ring-0"
                                />
                                {showPassword ? <FaEye className=' mx-4 text-xl' onClick={() => setShowpassword(!showPassword)} /> : <FaEyeSlash className='mx-4 text-xl' onClick={() => setShowpassword(!showPassword)} />}

                            </div>
                            <div className='text-red-700 text-sm'>
                                <ErrorMessage name="password" />
                            </div>
                        </div>
                        <div>
                            <CustomCheckbox checked={checked} setChecked={setChecked} />
                        </div>

                        <button type="submit" style={{ background: colors.orange }} className=" p-4 mt-4 text-sm text-white font-medium rounded-full">
                            Register
                        </button>
                    </Form>
                </Formik >
                <div className='relative p-[0.6rem] '>
                    <hr />
                    <div className='text-gray-500 absolute left-[31%] px-6 top-0 bg-white text-sm text-center'>Or sign up with</div>
                </div>
                <div>
                    <GoogleSignin />
                </div>
            </div>
            <div className='text-center text-sm mt-8 text-medium'>Have an account?{" "}<Link to="/login" style={{ color: colors.orange }}>Sign In</Link></div>
        </SlideIn>
    );
};
