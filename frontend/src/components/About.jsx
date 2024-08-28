import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from '../utils/motion';
import { IntroVideo } from './IntroVideo';
import { diamond, abrazo, tipsy } from "../assets";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[40vw] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full min-h-[20vh] min-w-[40vw] green-pink-gradient p-[1px] rounded-[20px] custom-shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-white rounded-[20px] py-5 px-12 min-h-[20vh] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h4 className='text-black text-[20px] font-regular text-center'>
          {title}
        </h4>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'src/assets/IntroVideo.mp4',
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };
  return (
    <div className='p-5 ml-5'>
      <motion.div variants={textVariant()}><p className='pt-24 mt-24'><a href=""></a></p>
        <p className={styles.sectionSubText}>Introduction</p>
        <IntroVideo options={videoJsOptions} onReady={handlePlayerReady} />
        <h2 className={`${styles.sectionHeadText} mt-14 md:ml-8 lg:ml-16`}>About Us</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='text-black text-[17px] xl:max-w-7xl leading-[30px] md:ml-2 lg:ml-14'
      >
        The jewelry of American designer Tariq Riaz sits at the meeting place of art and mechanics.
        Movement is captured in a single moment. Culture and science dance together to tell stories
        inspired by nature, by culture, and by the people who wear his work. Tariq Riaz’s jewelry is
        both beautiful and uncommonly wearable. Ingeniously designed mechanisms using proprietary
        stretch technology are at the heart of Tariq’s AbrazoFITTM philosophy: design that ensures
        jewelry fits perfectly, moves with your body, now and for a lifetime.
      </motion.p>

      <div className='mt-20 grid grid-cols-1 gap-10 px-16'>
        <div className='flex justify-start'>
          <ServiceCard
            title={
              <>
                <span className='sm:block hidden'>DIAMONDS Crafted with precision and attention to detail,</span>
                all of our pieces features custom cut VVS-1 and DEF color natural diamonds. METALS We work with 18K Rose Gold, White Gold and Yellow Gold
              </>
            }
            icon={diamond}
          />
        </div>
        <div className='flex sm:justify-end mr-16'>
          <ServiceCard
            title={
              <>
                <p className='h4 text-bold'>AbrazoFIT TM<span className='sm:block hidden'>: A PHILOSOPHY OF MOVEMENT</span></p>
                <p>
                  <span className='sm:block hidden'>We have brought this philosophy to our work, </span>
                  creating expandable jewelry that embraces the wearer, fitting perfectly
                  <span className='sm:block hidden'>, comfortably, following every move they make, now and for a lifetime.</span></p>
              </>
            }
            icon={abrazo}
            />
        </div>
        <div className='flex justify-start'>
          <ServiceCard
            title={
              <>
                <p className='h4 text-bold'>Tipsy<span className='sm:block hidden'> Haute Couture Diamond Necklace</span></p>
                <p>
                  <span className='sm:block hidden'>We have brought this philosophy to our work, </span>
                  A one-of-a-kind masterpiece celebrating female writers and empowerment, this extraordinary necklace is a testament to innovative design and craftsmanship.
                  <span className='sm:block hidden'>, comfortably, following every move they make, now and for a lifetime.</span></p>
              </>
            }
          icon={tipsy}
          />
        </div>
      </div>
    </div>
  )
}

export default About;


