import ExportedImage from 'next-image-export-optimizer';
import Image from 'next/image';
import Link from 'next/link';
import Logo from './Logo';
export default function Logowithshapes() {
  return (
    <div className="relative hidden  lg:flex items-center justify-center flex-wrap max-w-[278px]  h-[170px] z-50">
      {/* The logo image */}
      {/* <img
        src='/images/logo-removebg-preview.png'
        alt="Logo"
        className="relative z-10 max-h-[175px]  ml-6 h-36   mt-[-15px]"
      /> */}
       <Link href="/" className="  my-2">
          {/* <ExportedImage
          src={"/images/smallLogo.png"}
          alt="logo"
          width={90}
          height={90}
          /> */}
           <Logo className='w-[70px] h-[70px]'/>
        </Link>
        <Link href="/" className="  text-center">
          <p className="font-serif text-4xl  text-red-500 tracking-wide">ABHYASA</p>
          <p className=" text-[14px]  font-medium text-blue-500">SEMICON TECHNOLOGIES</p>
        </Link>

      {/* White shape (equivalent to ::before) */}
      {/* <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '278px',
          height: '220px',
          zIndex: '-1',
          backgroundColor: '#fff',
          borderRadius: '70% 70% 65% 70%',
          
          
        }}
      ></div> */}

      {/* Green gradient shape (equivalent to ::after) */}
      {/* <div
        style={{
          position: 'absolute',
          bottom: '-20px',
          left: '-6px',
          width: '288px',
          height: '234px',
          zIndex: '-2',
          borderRadius: '70% 70% 65% 70%',
          backgroundImage: 'linear-gradient(to right, #32cd32, #008000)', // LimeGreen to Green
        }}
      ></div> */}
    </div>
  );
}
