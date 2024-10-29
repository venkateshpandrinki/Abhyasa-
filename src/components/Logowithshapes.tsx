export default function Logowithshapes() {
  return (
    <div className="relative hidden  lg:flex items-center justify-center flex-wrap max-w-[278px]  h-[170px] z-50">
      {/* The logo image */}
      <img
        src='https://www.abhyasa.org.in/images/abhyasa_logo.jpg'
        alt="Logo"
        className="relative z-10 max-h-[175px]  ml-6 h-36 rounded-full  mt-[-15px]"
      />

      {/* White shape (equivalent to ::before) */}
      <div
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
      ></div>

      {/* Green gradient shape (equivalent to ::after) */}
      <div
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
      ></div>
    </div>
  );
}
