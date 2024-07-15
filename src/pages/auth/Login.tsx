/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import GoogleSignin from '../../components/GoogleSignin';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { colors } from '../../constants/color';
import SlideIn from '../../components/wrappers/SlideIn';


interface SignupFormValues {
    email: string;
    password: string;
}
export const LoginForm = () => {
    const [showPassword, setShowpassword] = useState<boolean>(false)
    const navigate = useNavigate();
    const handleSubmit = async (values: SignupFormValues, { setSubmitting }: FormikHelpers<SignupFormValues>) => {
        try {
            await signInWithEmailAndPassword(auth, values.email, values.password);
            toast.success('Login successful!');
            navigate("/home", {
                replace: true
            })
        } catch (error) {
            const typedError = error as any;
            if (typedError.code === "auth/invalid-credential") {
                toast.error('Invalid email or password.');
            } else {
                toast.error('An error occurred. Please try again later.');
            }
        }
        setSubmitting(false);
    };

    return (
        <SlideIn>
            <div className='my-[90px] mx-6'>
                <h1 className='text-4xl font-semibold'>Login in to your <br /> account</h1>
                <p className='my-4 text-gray-500'>Please sign in to your account</p>
                <div className='grid gap-6 items-center'>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={Yup.object({
                            email: Yup.string()
                                .email('Invalid email address')
                                .required('Email is Required'),
                            password: Yup.string()
                                .required('Password is Required'),
                        })}
                        onSubmit={handleSubmit}
                    >
                        <Form className='w-full md:w-[327px] flex flex-col mt-4 gap-6'>
                            <div>
                                <label className='font-semibold text-sm'>Email Address</label>
                                <Field
                                    name="email"
                                    type="email"
                                    className="w-full p-4 mt-2 border border-gray-300 rounded-lg font-semibold text-sm focus:outline-none focus:ring-0"
                                />
                                <div className='text-red-700'>
                                    <ErrorMessage name="email" />
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
                                <div className='text-red-700'>
                                    <ErrorMessage name="password" />
                                </div>
                            </div>
                            <div className='my-2 text-right font-medium text-sm' style={{ color: colors.orange }}>
                                <p>Forgot Password?</p>
                            </div>
                            <button type="submit" className="p-4 rounded-3xl text-sm text-white" style={{ background: colors.orange }}>
                                Sign In
                            </button>
                        </Form>
                    </Formik>
                    <div className='relative p-[0.6rem] '>
                        <hr />
                        <div className='text-gray-500 absolute left-[31%] px-6 top-0 bg-white text-sm text-center'>Or sign up with</div>
                    </div>
                    <GoogleSignin />
                </div>
                <div className=' mt-4 text-center text-sm font-medium '>
                    Dont have an account? <Link to="/signup" style={{ color: colors.orange }}>SignUp</Link>
                </div>
            </div>
        </SlideIn>
    );
};
