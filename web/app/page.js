import React from 'react';
import Image from 'next/image';
import Logo from 'components/Logo';
import Hero from 'components/Hero';
import Waitlist from 'components/Waitlist';
import Demo from 'components/Demo';
import Arrow from 'components/Arrow';
// import PhoneFrame from 'components/PhoneFrame';

export default function Home() {
  return (
<main className="flex min-h-screen flex-col justify-between bg-[#D4BBF8] p-8 md:p-20">
  <Logo />
  <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
    <div className="flex flex-col justify-start items-center md:items-start md:w-[40%]">
          <Hero />
          <br />
          <br />
          <Waitlist />
        </div>
        <Arrow/>
        <Demo />
      </div>
    </main>
  );
}
