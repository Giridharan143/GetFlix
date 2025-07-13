import Input from "@/components/input";
import { useCallback, useState } from "react";
import Image from 'next/image';

const Auth = () => {
    const[email,setEmail] = useState('');
    const[name,setName] = useState('');
    const[Password,setPassword] = useState('');

    const[variant,setVariant] = useState('login');

    const toggleVariant = useCallback(() =>{
      setVariant((currentVariant)=> currentVariant === 'login' ? 'register' : 'login')
    },[]);

    return (
            <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
  <div className="bg-black/50 w-full h-full">
    <nav className="px-12 py-5">
      <Image src="/images/logo.jpg" alt="logo" width={48} height={48} />
    </nav>
    <div className="flex justify-center">
      <div className="bg-black/85 px-10 py-10 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
        <h2 className="text-white text-4xl mb-8 font-semibold">{variant === 'login' ?'Sign in' : 'Register' }</h2>
        <div className="flex flex-col gap-4">
          {variant === 'register' && (
          <Input 
        label="Username" // The Email present here are about the text which are present above the text field
        onchange={(ev: React.ChangeEvent<HTMLInputElement>) => setName(ev.target.value)} // this is like an function to be given to the automation
        id="name"
        value={name}
        />
        )}
           <Input 
        label="Email" // The Email present here are about the text which are present above the text field
        onchange={(ev: React.ChangeEvent<HTMLInputElement>) => setEmail(ev.target.value)} // this is like an function to be given to the automation
        id="email"
        type="email"
        value={email}
        />
          <Input 
        label="Password" // The Email present here are about the text which are present above the text field
        onchange={(ev: React.ChangeEvent<HTMLInputElement>) => setPassword(ev.target.value)}// this is like an function to be given to the automation
        id="Password"
        type="Password"
        value={Password}
        />
        </div>
        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
         {variant === 'login' ? 'Login' : 'Register'}
        </button>
          <p className="text-neutral-500 mt-12">
              Using Getflix for first time ? 
              <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer"> 
                  Create an Account
              </span>
          </p>
      </div>
    </div>
  </div>
  <div>
  <a
    href="https://github.com/Giridharan143"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-4 right-4 opacity-40 bg-black px-3 py-1.5 text-white text-xs tracking-wider font-bold uppercase rounded hover:opacity-70 transition flex items-center gap-2"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.012c0 4.424 2.865 8.179 6.839 9.504.5.09.682-.217.682-.483 
        0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 
        1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.112-4.555-4.945 
        0-1.092.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.54 9.54 0 0 1 
        2.5.336c1.91-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.699 1.028 1.594 1.028 2.686 
        0 3.842-2.337 4.688-4.566 4.936.359.31.678.923.678 1.861 0 1.344-.012 2.428-.012 2.758 
        0 .268.18.577.688.479A10.013 10.013 0 0 0 22 12.012C22 6.484 17.523 2 12 2Z"
        clipRule="evenodd"
      />
    </svg>
    Giridharan K
  </a>
</div>

</div>


    );
}

export default Auth;
