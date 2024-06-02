import hero from "../assets/library-hero.jpg";

function Hero() {
  return (
    <div>
      <img src={hero} alt='hero image' className='w-full h-600px' />
    </div>
  );
}

export default Hero;  
