import React, { useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from "../addons/useTheme";
import ThemeToggle from "../addons/ThemeToggler";

export const Home = () => {

    const controls = useAnimation();

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

    const handleDownloadPDF = () => {
        const link = document.createElement("a");
        link.href = "/JoaoGabriel.pdf"; // Caminho relativo ao `public/`
        link.download = "JoaoGabriel.pdf"; // Nome do arquivo
        link.click();
      };
      

    return (

        <section>
            <div className=" w-full h-screen theme-bg flex justify-center items-center">
                <ThemeToggle />
                <motion.table className="">
                    <tbody>
                        <motion.tr>
                            <motion.td initial={{ opacity: 0, y: 0, x: -300 }} animate={controls} className="dark:text-[#9E9696] relative top-12 [text-shadow:0px_4px_4px_#00000040] [font-family:'Inter-ExtraBold',_Helvetica] font-extrabold text-[#7c7878] text-[16px] tracking-[0] leading-[normal]" colSpan="4">
                                <span data-cursor-hover="true" className="inline-block">
                                    Hi ✋ I'm João
                                </span>
                            </motion.td>
                        </motion.tr>
                        <motion.tr>
                            <motion.td data-cursor-hover="true" initial={{ opacity: 0, y: 0, x: -500 }} animate={controls} className="dark:text-[#f5f1ea] relative top-10 w-auto [text-shadow:0px_4px_4px_#00000040] [font-family:'Inter-Bold',_Helvetica] font-bold text-[#3a3131] text-[94px] tracking-[0] leading-none pl-[0.4rem]" colSpan="2">FULL-STACK</motion.td>
                            <motion.td className="z-10 relative top-9 w-[44%]" colSpan="2">
                                <motion.div initial={{ opacity: 0, y: 0, x: -250 }} animate={controls} className=" w-full flex items-center justify-evenly">
                                    <a data-cursor-hover="true" href="https://www.linkedin.com/in/joaogabrielpitol/" rel="noreferrer" className="dark:fill-[#FECE54] fill-[#7954FE] hover:scale-110 transition-all" target="_blank">
                                        <svg data-cursor-hover="true" width="70px" height="70px" viewBox="0 0 24 24" className="animation-delay-500 animate-[float_3s_ease-in-out_infinite] hover:animate-[float_0.7s_ease-in-out_infinite]">
                                            <path data-cursor-hover="true" d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" />
                                            <path data-cursor-hover="true" d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" />
                                            <path data-cursor-hover="true" d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" />
                                            <path data-cursor-hover="true" fillRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" />
                                        </svg>
                                    </a>
                                    <a data-cursor-hover="true" href="https://github.com/uPistola" rel="noreferrer" className="dark:fill-[#FECE54] fill-[#7954FE] hover:scale-110 transition-all" target="_blank">
                                        <svg data-cursor-hover="true" width="70px" height="70px" viewBox="0 0 20 20" className="animation-delay-1000 animate-[float_3s_ease-in-out_infinite] hover:animate-[float_0.7s_ease-in-out_infinite]">
                                            <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
                                                <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" >
                                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                                        <path data-cursor-hover="true" d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 
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
                                    <div data-cursor-hover="true" className="cursor-pointer hover:scale-110" onClick={handleDownloadPDF}>
                                        <svg data-cursor-hover="true" width="70px" height="70px" viewBox="0 0 24 24" className="animation-delay-500 animate-[float_3s_ease-in-out_infinite] hover:animate-[float_0.7s_ease-in-out_infinite] dark:fill-[#FECE54] fill-[#7954FE] hover:scale-110 transition-all">
                                            <path data-cursor-hover="true" fillRule="evenodd" d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2 2 2 0 0 0 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2V4a2 2 0 0 0-2-2h-7Zm-6 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h.5a2.5 2.5 0 0 0 0-5H5Zm1.5 3H6v-1h.5a.5.5 0 0 1 0 1Zm4.5-3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1.376A2.626 2.626 0 0 0 15 15.375v-1.75A2.626 2.626 0 0 0 12.375 11H11Zm1 5v-3h.375a.626.626 0 0 1 .625.626v1.748a.625.625 0 0 1-.626.626H12Zm5-5a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1h1a1 1 0 1 0 0-2h-2Z" clip-rule="evenodd"/>
                                        </svg>
                                    </div>

                                </motion.div>
                            </motion.td>
                        </motion.tr>
                        <motion.tr>
                            <motion.td initial={{ opacity: 0, y: 0, x: -1000 }} animate={controls} className="dark:text-[#f5f1ea] relative [text-shadow:0px_4px_4px_#00000040] [font-family:'Inter-ExtraBold',_Helvetica] font-extrabold text-[#3a3131] text-[160px] tracking-[0] leading-none" colSpan="4">
                                <span data-cursor-hover="true" className="inline-block">
                                    DEVELOPER
                                </span>
                            </motion.td>
                        </motion.tr>
                        <motion.tr>
                            <motion.td data-cursor-hover="true" initial={{ opacity: 0, y: 0, x: -300 }} animate={controls} className="dark:text-[#9E9696] relative left-full flex justify-end [text-shadow:0px_4px_4px_#00000040] [font-family:'Inter-ExtraBold',_Helvetica] font-extrabold text-[#7c7878] text-[20px] tracking-[0] leading-[normal]" colSpan="4">
                                I am {age} years old and a proactive&nbsp;<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Computer Science student
                            </motion.td>
                        </motion.tr>
                    </tbody>
                </motion.table>
            </div>
        </section>
    );
};
