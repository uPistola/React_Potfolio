import React, { useState, useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from "../addons/useTheme";

export const Home = () => {

    const controls = useAnimation();
    const { theme, setTheme } = useTheme();

    const birthDate = new Date(2004, 0, 2);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
  
    const isBeforeBirthday = 
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());
  
    if (isBeforeBirthday) {
      age--;
    }

    useEffect(() => {
        
        controls.start({
        opacity: 1,
        y: 0,
        x: 0,
        transition: { duration: 2.75, staggerChildren: 0.2 },
        });
    }, [controls]);
    
    const [copyValue] = useState('pitoljoaogabriel@gmail.com');
    let square = null; 
    function handleCopy(){
        navigator.clipboard.writeText(copyValue);

        const svgXML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="138" height="47" viewBox="0 0 138 47" fill="none">
                <path d="M7 0.5H131C134.59 0.5 137.5 3.41015 137.5 7V34.0382C137.5 37.628 134.59 40.5382 131 40.5382H29.4384C28.8408 40.5382 28.2452 40.6096 27.6645 40.751L6.64604 45.8675C3.51652 46.6294 0.5 44.2591 0.5 41.0382V6.99999C0.5 3.41014 3.41015 0.5 7 0.5Z"/>
                <text x="10" y="25" font-size="18" fill="#665C9F">Email Copiado!</text>
            </svg>`;

        if (!square) {
            square = document.createElement('div');
            square.innerHTML = svgXML;
            square.classList.add('square');
            const container = document.querySelector('.container');
            container.appendChild(square);
    }
    square.style.opacity = '1';

    setTimeout(() => {
        square.style.opacity = '0';
    }, 500);
    }
    
    return (

        <section>
            <div className=" w-full h-screen bg-[#f5f1ea] dark:bg-[#3a3131] flex justify-center items-center">
                    {theme === "light" ?
                    (<div onClick={() => setTheme("dark")} className="fixed z-[999] top-0 right-0 m-8" ><svg className="cursor-pointer hover:scale-110 transition-all" width="50px" height="50px" viewBox="0 0 24 24" fill="[#f5f1ea]" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 22H16" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 19H19" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 16H22" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM20.4806 15.6997C20.3148 16.0793 20.4881 16.5214 20.8676 16.6873C21.2472 16.8531 21.6893 16.6798 21.8552 16.3003L20.4806 15.6997ZM2.14482 16.3003C2.31066 16.6798 2.7528 16.8531 3.13237 16.6873C3.51193 16.5214 3.68519 16.0793 3.51935 15.6997L2.14482 16.3003ZM3.98703 7.37554C4.19443 7.017 4.07191 6.5582 3.71337 6.3508C3.35482 6.14339 2.89602 6.26591 2.68862 6.62446L3.98703 7.37554ZM6.62446 2.68862C6.26591 2.89602 6.14339 3.35482 6.3508 3.71337C6.5582 4.07191 7.017 4.19443 7.37554 3.98703L6.62446 2.68862ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM21.25 12C21.25 13.3169 20.9752 14.5677 20.4806 15.6997L21.8552 16.3003C22.431 14.9824 22.75 13.5275 22.75 12H21.25ZM3.51935 15.6997C3.02475 14.5677 2.75 13.3169 2.75 12H1.25C1.25 13.5275 1.56904 14.9824 2.14482 16.3003L3.51935 15.6997ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7092 12.2447ZM2.75 12C2.75 10.3139 3.20043 8.73533 3.98703 7.37554L2.68862 6.62446C1.77351 8.2064 1.25 10.0432 1.25 12H2.75ZM7.37554 3.98703C8.73533 3.20043 10.3139 2.75 12 2.75V1.25C10.0432 1.25 8.2064 1.77351 6.62446 2.68862L7.37554 3.98703Z" fill="#1C274C"/>
                        <path d="M19.9001 2.30719C19.7392 1.8976 19.1616 1.8976 19.0007 2.30719L18.5703 3.40247C18.5212 3.52752 18.4226 3.62651 18.298 3.67583L17.2067 4.1078C16.7986 4.26934 16.7986 4.849 17.2067 5.01054L18.298 5.44252C18.4226 5.49184 18.5212 5.59082 18.5703 5.71587L19.0007 6.81115C19.1616 7.22074 19.7392 7.22074 19.9001 6.81116L20.3305 5.71587C20.3796 5.59082 20.4782 5.49184 20.6028 5.44252L21.6941 5.01054C22.1022 4.849 22.1022 4.26934 21.6941 4.1078L20.6028 3.67583C20.4782 3.62651 20.3796 3.52752 20.3305 3.40247L19.9001 2.30719Z" stroke="#1C274C"/>
                        <path d="M16.0328 8.12967C15.8718 7.72009 15.2943 7.72009 15.1333 8.12967L14.9764 8.52902C14.9273 8.65407 14.8287 8.75305 14.7041 8.80237L14.3062 8.95987C13.8981 9.12141 13.8981 9.70107 14.3062 9.86261L14.7041 10.0201C14.8287 10.0694 14.9273 10.1684 14.9764 10.2935L15.1333 10.6928C15.2943 11.1024 15.8718 11.1024 16.0328 10.6928L16.1897 10.2935C16.2388 10.1684 16.3374 10.0694 16.462 10.0201L16.8599 9.86261C17.268 9.70107 17.268 9.12141 16.8599 8.95987L16.462 8.80237C16.3374 8.75305 16.2388 8.65407 16.1897 8.52902L16.0328 8.12967Z" stroke="#1C274C"/>
                        </svg></div>
                        ) : (
                        <div onClick={() => setTheme("light")} className="fixed z-[999] top-0 right-0 m-8">
                        <svg className="cursor-pointer hover:scale-110 transition-all" width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 22H16" stroke="#f5f1ea" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 19H19" stroke="#f5f1ea" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 16H22" stroke="#f5f1ea" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 6.34141C10.6256 6.12031 11.2987 6 12 6C15.3137 6 18 8.68629 18 12C18 13.5217 17.4335 14.911 16.5 15.9687H7.5C6.56645 14.911 6 13.5217 6 12C6 11.2987 6.12031 10.6256 6.34141 10" stroke="#f5f1ea" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M12 2V3" stroke="#f5f1ea" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M22 12L21 12" stroke="#f5f1ea" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M3 12L2 12" stroke="#f5f1ea" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M19.0708 4.92969L18.678 5.32252" stroke="#f5f1ea" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M5.32178 5.32227L4.92894 4.92943" stroke="#f5f1ea" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </div>)} 
                <motion.table className="">
                <tbody>
                <motion.tr>
                    <motion.td initial={{ opacity: 0, y: 0, x:-300}} animate={controls} className="dark:text-[#9E9696] relative top-12 [text-shadow:0px_4px_4px_#00000040] [font-family:'Inter-ExtraBold',_Helvetica] font-extrabold text-[#7c7878] text-[16px] tracking-[0] leading-[normal]" colSpan="4">Oi ✋ sou o João</motion.td>
                </motion.tr>
                <motion.tr>    
                    <motion.td initial={{ opacity: 0, y: 0, x:-500}} animate={controls} className="dark:text-[#f5f1ea] relative top-10 w-auto [text-shadow:0px_4px_4px_#00000040] [font-family:'Inter-Bold',_Helvetica] font-bold text-[#3a3131] text-[94px] tracking-[0] leading-none pl-[0.4rem]" colSpan ="2">FRONT-END</motion.td>
                    <motion.td className="z-10 relative top-9 w-[45%]" colSpan="2">
                        <motion.div initial={{ opacity: 0, y: 0, x:-250 }} animate={controls} className=" w-full flex items-center justify-evenly">
                            <a href="https://www.linkedin.com/in/joaogabrielpitol/" rel="noreferrer" className="dark:fill-[#FECE54] dark:hover:fill-[#665C9F] fill-[#665C9F] hover:fill-[#FECE54] hover:scale-110 transition-all"target="_blank">
                                <svg width="70px" height="70px" viewBox="0 0 24 24" className="animation-delay-500 animate-[float_3s_ease-in-out_infinite] hover:animate-[float_0.7s_ease-in-out_infinite]">
                                <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"/>
                                <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"/>
                                <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"/>
                                <path fillRule="evenodd"  d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"/>
                                </svg>
                            </a>
                            <a href="https://github.com/uPistola" rel="noreferrer" className="dark:fill-[#FECE54] dark:hover:fill-[#665C9F] fill-[#665C9F] hover:fill-[#FECE54] hover:scale-110 transition-all" target="_blank">
                                <svg width="70px" height="70px" viewBox="0 0 20 20" className="animation-delay-1000 animate-[float_3s_ease-in-out_infinite] hover:animate-[float_0.7s_ease-in-out_infinite]">
                                    <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
                                    <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" >
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 
                                        C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718
                                        C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303
                                        C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664
                                        88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493
                                        91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87
                                        87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982
                                        C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" >
                                    </path>
                                        </g>
                                        </g>
                                        </g>
                                </svg>
                            </a>
                            <div className="container relative w-auto flex">
                                <div className="cursor-pointer hover:scale-110" onClick={handleCopy}>
                                    <svg width="70px" height="70px" viewBox="0 0 1920 1920" className="animation-delay-1500 animate-[float_3s_ease-in-out_infinite] hover:animate-[float_0.7s_ease-in-out_infinite] dark:fill-[#FECE54] dark:hover:fill-[#665C9F] fill-[#665C9F] hover:fill-[#FECE54]  transition-all">
                                        <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fillRule="evenodd"/>
                                    </svg>
                                </div>
                            </div>

                        </motion.div>   
                    </motion.td>
                </motion.tr>
                <motion.tr>
                    <motion.td initial={{ opacity: 0, y: 0, x:-1000}} animate={controls} className="dark:text-[#f5f1ea] relative [text-shadow:0px_4px_4px_#00000040] [font-family:'Inter-ExtraBold',_Helvetica] font-extrabold text-[#3a3131] text-[160px] tracking-[0] leading-none" colSpan="4">DEVELOPER</motion.td>
                </motion.tr>
                <motion.tr>
                    <motion.td initial={{ opacity: 0, y: 0, x:-300}} animate={controls} className=" dark:text-[#9E9696] relative left-full flex justify-end [text-shadow:0px_4px_4px_#00000040] [font-family:'Inter-ExtraBold',_Helvetica] font-extrabold text-[#7c7878] text-[20px] tracking-[0] leading-[normal]" colSpan="4">
                                Tenho {age} anos e sou um proativo&nbsp;<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;estudante de Ciência da Computação</motion.td>
                </motion.tr>
                </tbody>
            </motion.table>
            </div>
        </section>
    );
};
