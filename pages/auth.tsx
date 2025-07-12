import Input from "@/components/input";
import { useState } from "react";
import Image from 'next/image';

const Auth = () => {
    const[email,setEmail] = useState('');
    const[name,setName] = useState('');
    const[Password,setPassword] = useState('');
    return (
            <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
  <div className="bg-black/50 w-full h-full">
    <nav className="px-12 py-5">
      <Image src="/images/logo.jpg" alt="logo" width={48} height={48} />
    </nav>
    <div className="flex justify-center">
      <div className="bg-black/85 px-10 py-10 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
        <h2 className="text-white text-4xl mb-8 font-semibold">Sign in</h2>
        <div className="flex flex-col gap-4">
          <Input 
        label="Username" // The Email present here are about the text which are present above the text field
        onchange={(ev: React.ChangeEvent<HTMLInputElement>) => setName(ev.target.value)} // this is like an function to be given to the automation
        id="name"
        value={name}
        />
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
      </div>
    </div>
  </div>
</div>

    );
}

export default Auth;
