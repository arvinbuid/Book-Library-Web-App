import gigachad from "../assets/gigachad.jpg";

function About() {
  return (
    <div className='w-full h-auto'>
      <div className='flex justify-center py-8'>
        <h1 className='text-4xl font-bold'>About</h1>
      </div>

      <div className='flex m-auto xs:flex-col xl:flex-row w-[90vw]'>
        {/* About Us Image */}
        <div className='px-4 py-6 flex justify-center'>
          <img src={gigachad} alt='Book Image' className='w-[300px] md:w-[500px]' />
        </div>

        <div className='flex flex-1 flex-col px-6 mt-6 gap-3'>
          {/* About Us Description */}

          <div>
            <span className='text-2xl font-bold'>Description: </span>
            <span className='text-xl leading-4'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit urna dapibus lobortis duis, ad
              ullamcorper egestas nisi aptent montes at condimentum cursus fermentum arcu, leo
              hendrerit per gravida viverra rhoncus sodales eleifend ornare ac. Praesent hendrerit
              ut porta turpis duis vel, mi quisque phasellus sem imperdiet at vestibulum, fermentum
              eleifend mus ante rutrum. Rutrum vel etiam est quisque nisl quis ligula eros, netus
              elementum sodales ridiculus commodo tristique nam feugiat neque, ac convallis nunc
              orci blandit faucibus habitant. Convallis himenaeos nascetur mollis curae gravida
              tincidunt neque, id pharetra quam pellentesque congue netus malesuada ad, suspendisse
              diam dictumst ornare laoreet lobortis.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
