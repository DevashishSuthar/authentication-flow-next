import { GiSevenPointedStar } from 'react-icons/gi';

import Button from '@/components/general/button';
import ErrorPlaceholder from '@/components/general/error-placeholder';
import InputBox from '@/components/general/input-box';
import Label from '@/components/general/label';

const LoginCard = () => {
    return (
        <div className='bg-white h-[550px] w-[450px] p-5 rounded-lg shadow-lg'>
            <div className='flex flex-col items-center justify-center my-[15px]'>
                <GiSevenPointedStar size={24} />
                <span className='text-gray-400 my-[10px] text-lg'>
                    Create an account
                </span>
            </div>
            <div>
                <div className='flex flex-col my-3'>
                    <Label text='Email' htmlFor='email' />
                    <InputBox
                        type='email'
                        name='email'
                        id='email'
                        className='border border-slate-300 rounded-lg px-[10px] py-[8px] mt-[5px]'
                        placeholder='your@email.com'
                    />
                </div>

                <div className='flex flex-col my-4'>
                    <Label text='Password' htmlFor='password' />
                    <InputBox
                        name='password'
                        type='password'
                        id='password'
                        className='border border-slate-300 rounded-lg px-[10px] py-[8px] mt-[5px]'
                        placeholder=''
                    />
                    <ErrorPlaceholder
                        className='text-slate-500 text-xs mt-[5px]'
                        text='Ensure its at least 6 characters' />
                </div>

                <div className='flex flex-col my-4'>
                    <Label text='Repeat Password' htmlFor='repeatPassword' />
                    <InputBox
                        name='repeatPassword'
                        type='password'
                        id='repeatPassword'
                        className='border border-slate-300 rounded-lg px-[10px] py-[8px] mt-[5px]'
                        placeholder=''
                    />
                    <ErrorPlaceholder
                        className='text-slate-500 text-xs mt-[5px]'
                        text='Type your password again' />
                </div>

                <Button className='bg-black text-white w-[100%] rounded-lg p-[10px] shadow-md mt-3'
                    text='Get Started' />
            </div>
            <div className='flex items-center justify-center mt-[15px]'>
                <span className='text-base text-slate-700'>Already have an account?</span>
                <span className='text-blue-700 underline mx-1 cursor-pointer'>Sign in</span>
            </div>

        </div>
    );
};

export default LoginCard;