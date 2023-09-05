import React from 'react';
import Spinner from '../../public/icons/spinner.svg'
import Image from 'next/image';
interface LoadingHoverProps {
    fixed?: boolean,
    text?: string
}

export default function LoadingHoverComponent(props: LoadingHoverProps) {
  const { fixed, text = 'Loading ...' } = props;
  return (
    <div
      className={`${
        fixed ? 'fixed' : 'absolute'
      } z-[9999] right-0 top-0 left-0 bottom-0 overflow-hidden bg-gray-400 opacity-50 flex flex-col items-center justify-center`}
    >
       <Image src={Spinner} alt='spinner' className='animate-spin text-blue-700' />
      <h2 className="text-center text-black-900 font-semibold text-md mt-3">{text}</h2>
    </div>
  );
}
