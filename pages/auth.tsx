/* eslint-disable @next/next/no-img-element */
import Input from "@/components/input";
import axios from "axios";
import { useCallback, useState } from "react";
import { signIn } from 'next-auth/react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Auth = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant(currentVariant => (currentVariant === 'login' ? 'register' : 'login'));
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/profiles'
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div className="relative h-full w-full bg-[url('/images/30.jpg')] 
    bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-60 ">
        <nav className="px-12 py-0">
          <img src="/images/3.png" alt="logo" className="h-20" />
        </nav>
        <div className="flex justify-center">

        <div className="flex 
        bg-gradient-to-r
        from-gray-900 via-gray-900 to-gray-900
           bg-opacity-90 w-full lg:max-w-2xl rounded-md">
          
            <div className="hidden 
            lg:block 
            w-1/2
             bg-[url('/images/11.jpeg')] bg-no-repeat bg-cover rounded-l-md"></div>
         
            <div className="flex 
            flex-col 
            justify-center 
            px-16
            py-4
            w-1/2">
              <h2 className="text-white text-4xl mb-8 font-semibold">
                {variant === 'login' ? 'Sign in' : 'Register'}
              </h2>
              <div className="flex flex-col gap-4">
                {variant === 'register' && (
                  <Input
                    label="Username"
                    onChange={(ev: any) => setName(ev.target.value)}
                    id="name"
                    type="name"
                    value={name}
                  />
                )}

                <Input
                  label="Email"
                  onChange={(ev: any) => setEmail(ev.target.value)}
                  id="email"
                  type="email"
                  value={email}
                />
                <Input
                  label="Password"
                  onChange={(ev: any) => setPassword(ev.target.value)}
                  id="password"
                  type="password"
                  value={password}
                />
              </div>
              <button
                onClick={variant === 'login' ? login : register}
                className="bg-gradient-to-r
                 from-red-800
                  via-pink-700
                  to-red-800
                   hover:from-red-600
                    hover:via-pink-500
                    hover:to-red-600
                     text-white 
                     shadow-sm
                     font-bold 
                     py-2 px-4 
                     rounded 
                     mt-10 
                     transition
                     " >
                {variant === 'login' ? 'Login' : 'Sign up'}
              </button>
              <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                <div
                  onClick={() => signIn('google', { callbackUrl: '/profiles' })}
                  className="
                    w-10
                    h-10
                    bg-white
                    rounded-full
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    hover:opacity-80
                    transition
                  "
                >
                  <FcGoogle size={30} />
                </div>
                <div
                  onClick={() => signIn('github', { callbackUrl: '/profiles' })}
                  className="
                    w-10
                    h-10
                    bg-white
                    rounded-full
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    hover:opacity-80
                    transition
                  "
                >
                  <FaGithub size={30} />
                </div>
              </div>
              <p className="text-neutral-500 mt-5">
                {variant === 'login' ? 'First time using Theater?' : 'Already have an account?'}
                <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                  {variant === 'login' ? 'Create an Account' : 'Sign in'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;