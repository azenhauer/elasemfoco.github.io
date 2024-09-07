import React from "react";   

import NavBar from "../../Components/NavBar/NavBar";

import InstaImg from './MidiasImages/instagram_background1.png';

import InstaLogo from './MidiasImages/instalogo.png';

import TKImg from './MidiasImages/tiktok_background1.jpeg';

import TKLogo from './MidiasImages/tiktoklogo.png';

import YTImg from './MidiasImages/youtube_background1.jpg';

import YTLogo from './MidiasImages/youtubelogo.png';

import Footer from "../../Components/Footer";



const SocialMediaCard = ({ image, title, tag, link, smlogo }) => (

<div className="w-full flex justify-center mb-2">

    <div className="grid-container max-h-[410px] max-w-[2000px]">

            <img src={image} alt={title} className="z-10  object-cover max-h[410px] min-h-[200px] " />

            <div className=" z-20  flex flex-col justify-center items-center text-white pb-4">

                <h2 className="font-sizingh2 font-bold mb-1 text-[#EBEAD4]">{tag}</h2>

                <div className="flex flex-nowrap relative w-full justify-center">

                    <img src={smlogo} alt={title} className="max-h-[50px] max-w-[37px] flex justify-center items-center relative bottom-1" />

                    <h3 className="font-sizingh3 text-2xl mb-1 xl:mb-2 text-[#EBEAD4] flex justify center items-center">{title}</h3>

                </div>



              

                <a href={link} target="_blank" rel="noopener noreferrer" className=" px-3 py-2 rounded-md relative flex h-[2em] w-[4em] items-center justify-center overflow-hidden bg-[#860a35] font-medium text-[#EBEAD4] shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-pink-900 hover:shadow-pink-900 hover:before:border-[25px]">

                    <span className="relative z-10 font-bold "Hide> Visit</span>

                </a>

            </div>

        </div>

</div>

);



const socialMediaData = [

    {

        smlogo: InstaLogo,

        title: 'Instagram',

        image: InstaImg,

        tag: '@nucleoelas.emfoco',

        link: 'https://www.instagram.com/nucleoelas.emfoco/',

    }

    ,

    {

        smlogo: TKLogo,

        title: 'TickTok',

        image: TKImg,

        tag: '@nucleoelas.emfoco',

        link: 'https://www.tiktok.com/@nucleoelas.emfoco?_t=8eIfwfrLwIv&_r=1',

    }

    ,

    {

        smlogo: YTLogo,

        title: 'Youtube',

        image: YTImg,

        tag: '@nucleoelasemfoco',

        link: 'https://www.youtube.com/@NucleoElasEmFoco',

    }

];



function Mídias() {

    return (

        <div className=" h-auto overflow-hidden">

            <NavBar />

            

            <div className="content-midias">

                {socialMediaData.map((platform, index) => (

                    <SocialMediaCard key={index} {...platform} />

                ))}

            </div>

            <Footer></Footer>

        </div>

    );

}



export default Mídias;