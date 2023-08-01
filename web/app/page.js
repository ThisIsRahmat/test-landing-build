import Image from 'next/image';
import Logo from 'components/Logo';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';
import EarlyAccess from 'components/EarlyAccess';
import InteriorDemo from 'components/InteriorDemo';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24 bg-purple-300">
      <Logo />
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <Heading />
          <SubHeading />
          <EarlyAccess />
        </div>
        <InteriorDemo />
      </div>
    </main>
  );
}
