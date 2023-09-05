import React, { useEffect } from "react";

const Work = () => {
        
    return (
        <section className="relative flex flex-col justify-center items-center h-screen bg-[#f5f1ea] dark:bg-[#3a3131]">
            <div className="w-auto h-1/2 flex justify-center items-center p-20">
                <div className="aboutme w-1/2 h-full bg-slate-400 hidden">
                    <img className="w-auto h-auto" alt="Minha foto" src=""/>
                </div>
                <div className="aboutme w-1/2 h-auto p-20 hidden">
                    <h1 className="text-[#3a3131] dark:text-[#d8d5ce] [font-family:'Inter-Bold',_Helvetica] [text-shadow:0px_4px_4px_#00000040] font-bold text-[56px] text-left tracking-[0] leading-[normal]">SOBRE MIM</h1>
                    <p className="w [font-family:'Inter-Bold',_Helvetica] font-medium [text-shadow:0px_4px_4px_#00000040] dark:text-[#f5f1ea] text-[22px] text-left tracking-[0] leading-[normal]">
                        <span className="">
                            Me chamo João Gabriel Pitol e sempre fui apaixonado pela tecnologia, a vontade de conhecer os limites da
                            programação me entusiasma a cada dia.
                            Em 2022 cheguei em Curitiba e comecei a cursar Ciência da Computação na PUCPR, e agora estando na metade do curso, me dedico a
                            linguagens como,{" "}
                        </span>
                        <span className="text-[#131212] font-bold dark:text-[#ffffff]">Python, Java e C</span>
                        <span className="text-[#3a3131] dark:text-[#f5f1ea]">, mas com um apelo especial para o </span>
                        <span className="text-[#131111] font-bold dark:text-[#ffffff]">desenvolvimento WEB.</span>
                    </p>
                    <div className="mt-10 mb-3 [text-shadow:0px_4px_4px_#00000040] [font-family:'Inter-Bold',_Helvetica] dark:text-[#9E9696] font-bold text-[#3a3131] text-[18px] text-left tracking-[0] leading-[normal]">
                        TECNOLOGIAS CONHECIDAS
                    </div>
                    <div className="flex gap-4">
                        <svg className="fill-[#000000] dark:fill-[#f5f1ea]" width="40px" height="40px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="nonzero" clip-rule="nonzero" d="M4.84989 2.37195C4.59895 2.51683 4.33488 2.91636 4.30424 3.78785C4.28968 4.20181 3.9423 4.52559 3.52835 4.51103C3.11439 4.49647 2.79061 4.1491 2.80516 3.73514C2.84273 2.66673 3.1806 1.60366 4.09989 1.07291C5.02179 0.540653 6.11484 0.782356 7.06128 1.28727C7.42674 1.48224 7.56495 1.93656 7.36998 2.30201C7.17501 2.66747 6.72069 2.80568 6.35524 2.61072C5.5818 2.1981 5.10158 2.22663 4.84989 2.37195ZM8.87139 3.67284C9.19036 3.40858 9.66315 3.45293 9.92741 3.7719C10.4818 4.44103 11.0136 5.20405 11.4963 6.04018C12.5366 7.84191 13.178 9.68785 13.3509 11.2362C13.4372 12.0091 13.4108 12.7446 13.2303 13.3754C13.0484 14.011 12.6941 14.5863 12.0999 14.9293C11.381 15.3444 10.5509 15.2855 9.79114 15.0089C9.02868 14.7313 8.24395 14.2056 7.49586 13.5228C7.18993 13.2435 7.16831 12.7691 7.44756 12.4632C7.72681 12.1573 8.20119 12.1356 8.50712 12.4149C9.16624 13.0165 9.78567 13.4105 10.3043 13.5994C10.8257 13.7892 11.1537 13.7436 11.3499 13.6303C11.5143 13.5354 11.6797 13.342 11.7882 12.9627C11.8981 12.5787 11.9328 12.0529 11.8602 11.4026C11.7152 10.1045 11.1591 8.45607 10.1973 6.79018C9.75492 6.02396 9.27081 5.33055 8.77232 4.72886C8.50807 4.40989 8.55242 3.93709 8.87139 3.67284Z"/>
                        <path fill-rule="nonzero" clip-rule="nonzero" d="M14.5 8.20557C14.5 7.91581 14.286 7.48735 13.5466 7.02507C13.1954 6.80549 13.0887 6.34276 13.3083 5.99154C13.5279 5.64032 13.9906 5.53361 14.3418 5.75319C15.2483 6.31993 16 7.14407 16 8.20557C16 9.27009 15.2442 10.0958 14.3337 10.663C13.9821 10.882 13.5195 10.7746 13.3005 10.423C13.0815 10.0714 13.189 9.60887 13.5405 9.38985C14.2846 8.92635 14.5 8.4962 14.5 8.20557ZM11.3626 11.0378C11.432 11.4462 11.1572 11.8335 10.7488 11.9029C9.89219 12.0484 8.96547 12.1274 8 12.1274C5.91954 12.1274 4.00018 11.76 2.57286 11.1355C1.86032 10.8238 1.23659 10.4332 0.780529 9.9615C0.320977 9.48616 0 8.89166 0 8.20557C0 7.37549 0.466082 6.68599 1.08548 6.16636C1.70712 5.64485 2.55471 5.22808 3.52013 4.92164C3.91494 4.79633 4.33657 5.01479 4.46189 5.40959C4.5872 5.80439 4.36874 6.22603 3.97394 6.35135C3.12334 6.62134 2.4724 6.96078 2.04954 7.31553C1.62442 7.67217 1.5 7.97899 1.5 8.20557C1.5 8.39536 1.58476 8.6353 1.85895 8.91891C2.13663 9.20613 2.57464 9.49905 3.17409 9.76131C4.37076 10.2848 6.07639 10.6274 8 10.6274C8.88475 10.6274 9.72732 10.5549 10.4976 10.424C10.906 10.3547 11.2933 10.6295 11.3626 11.0378Z" />
                        <path fill-rule="nonzero" clip-rule="nonzero" d="M4.87192 13.6303C5.12286 13.7752 5.6009 13.8041 6.37095 13.3949C6.73673 13.2005 7.19082 13.3395 7.38519 13.7052C7.57957 14.071 7.44062 14.5251 7.07484 14.7195C6.13079 15.2211 5.04121 15.4601 4.12192 14.9293C3.20003 14.3971 2.86282 13.3296 2.82687 12.2575C2.81299 11.8435 3.13733 11.4967 3.55131 11.4828C3.96529 11.4689 4.31215 11.7932 4.32603 12.2072C4.35541 13.0834 4.62023 13.485 4.87192 13.6303ZM3.98778 9.49712C3.59944 9.35301 3.40145 8.92138 3.54556 8.53304C3.84786 7.71839 4.24274 6.8763 4.72548 6.04018C5.76571 4.23845 7.04361 2.75996 8.29806 1.83609C8.92431 1.37487 9.57441 1.02999 10.211 0.870901C10.8524 0.71059 11.5278 0.729863 12.1219 1.07291C12.8408 1.48795 13.2049 2.23634 13.3452 3.03257C13.486 3.83168 13.4232 4.77409 13.2058 5.7634C13.1169 6.16796 12.7169 6.42388 12.3124 6.33501C11.9078 6.24613 11.6519 5.84612 11.7408 5.44155C11.9322 4.56992 11.9637 3.83647 11.868 3.29288C11.7717 2.7464 11.5681 2.48524 11.3719 2.37195C11.2076 2.27705 10.9574 2.23049 10.5747 2.32614C10.1871 2.42301 9.71442 2.65588 9.18757 3.04388C8.13584 3.81846 6.98632 5.12428 6.02452 6.79018C5.58214 7.55639 5.22369 8.32235 4.95185 9.0549C4.80774 9.44323 4.37611 9.64122 3.98778 9.49712Z" />
                        <path d="M9.45925 8.06618C9.45925 8.81694 8.85063 9.42556 8.09987 9.42556C7.34911 9.42556 6.7405 8.81694 6.7405 8.06618C6.7405 7.31542 7.34911 6.70681 8.09987 6.70681C8.85063 6.70681 9.45925 7.31542 9.45925 8.06618Z"/>
                        </svg>
                        <svg className="fill-[#000000] dark:fill-[#f5f1ea]" width="40px" height="40px" viewBox="0 0 16 16"  xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.79 1.574h3.866c.14 0 .252.11.252.246v5.186a.25.25 0 01-.252.246H6.344c-.975 0-1.766.77-1.766 1.72v1.162a.25.25 0 01-.253.243H1.867a.25.25 
                        0 01-.253-.246V6.177a.25.25 0 01.252-.246H7.98c.418 0 .757-.33.757-.737a.747.747 0 00-.757-.738H5.537V1.82a.25.25 0 01.253-.246zm5.632 2.592V1.82c0-.95-.79-1.72-1.766-1.72H5.79c-.976
                        0-1.767.77-1.767 1.72v2.636H1.867C.89 4.456.1 5.226.1 6.176v3.955c0 .95.79 1.72 1.766 1.72h2.46c.085 0 .17-.006.252-.017v2.346c0 .95.79 1.72 1.766 1.72h3.866c.976 0 1.767-.77
                        1.767-1.72v-2.636h2.156c.976 0 1.767-.77 1.767-1.72V5.868c0-.95-.79-1.72-1.767-1.72h-2.458c-.086 0-.17.005-.253.017zm-5.33 5.974V8.994a.25.25 0 01.252-.246h3.312c.976 0 1.766-.77
                        1.766-1.72V5.866a.25.25 0 01.253-.243h2.458c.14 0 .253.11.253.246v3.954a.25.25 0 01-.252.246H8.02a.747.747 0 00-.757.737c0 .408.339.738.757.738h2.442v2.636a.25.25 0
                        01-.253.246H6.344a.25.25 0 01-.252-.246v-4.04z"/>
                        </svg>
                        <svg className="fill-[#000000] dark:fill-[#f5f1ea]" width="40px" height="40px" viewBox="0 0 16 16"  xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="nonzero" clip-rule="nonzero" d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 
                        4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5
                        1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM8.25 5.75C8.66421 5.75 9
                        6.08579 9 6.5V10.5C9 11.5048 8.72399 12.2584 8.15514 12.7324C7.61223 13.1848 6.95384 13.25 6.5 13.25C6.08579 13.25 5.75 12.9142 5.75 12.5C5.75
                        12.0858 6.08579 11.75 6.5 11.75C6.84617 11.75 7.06277 11.6902 7.19486 11.5801C7.301 11.4916 7.5 11.2452 7.5 10.5V6.5C7.5 6.08579 7.83578 5.75
                        8.25 5.75ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052
                        15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243
                        7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75
                        13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507
                        14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405
                        11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566
                        11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824
                        10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z"/>
                        </svg>
                        <svg className="fill-[#000000] dark:fill-[#f5f1ea]" width="40px" height="40px" viewBox="0 0 16 16"  xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="nonzero" clip-rule="nonzero" d="M4.45262 0.77086C4.71879 0.451461 5.19348 0.408307 5.51288 0.674473C6.27367 1.30846 6.56914 
                        2.05693 6.4059 2.79543C6.26691 3.42419 5.82892 3.87253 5.4875 4.11099C5.27416 4.29388 5.18522 4.43743 5.14847 4.52681C5.11339 4.61211 5.11415
                        4.67467 5.12613 4.72887C5.15746 4.87054 5.29291 5.0395 5.44856 5.14327C5.7945 5.37389 5.88798 5.84129 5.65735 6.18722C5.42673 6.53316 4.95933
                        6.62664 4.61339 6.39602C4.26717 6.1652 3.80036 5.70682 3.65602 5.05387C3.49275 4.31537 3.78822 3.56689 4.54901 2.9329L4.5799 2.90715L4.61336
                        2.88485C4.76901 2.78108 4.90445 2.61213 4.93577 2.47046C4.94775 2.41627 4.94851 2.3537 4.91343 2.2684C4.87525 2.17555 4.78076 2.02424 4.54901
                        1.83112C4.22961 1.56495 4.18646 1.09026 4.45262 0.77086ZM9.1224 2.77835C9.38857 3.09775 9.34542 3.57244 9.02602 3.83861C8.79427 4.03173 8.69978
                        4.18303 8.66159 4.27588C8.62651 4.36119 8.62728 4.42375 8.63926 4.47794C8.67057 4.61962 8.80602 4.78857 8.96166 4.89233C9.3076 5.12296 9.40108
                        5.59035 9.17045 5.93629C8.93983 6.28223 8.47243 6.3757 8.1265 6.14508C7.78027 5.91426 7.31347 5.45587 7.16913 4.80292C7.00588 4.06442 7.30136
                        3.31595 8.06214 2.68196C8.38154 2.41579 8.85624 2.45895 9.1224 2.77835ZM0.207849 7.59455C0.29163 7.25942 0.59274 7.02432 0.938179 7.02432H12.4962C12.8417
                        7.02432 13.1428 7.25942 13.2266 7.59455C13.3354 8.03003 13.3631 8.58563 13.3041 9.20747H15.1472C15.563 9.20747 15.9 9.54451 15.9 9.96027C15.9 10.6991 15.8551
                        11.8958 15.103 12.8984C14.3624 13.8856 13.0731 14.5203 11.0103 14.5882C10.7408 14.9262 10.444 15.2603 10.1177 15.5866C9.97652 15.7278 9.78504 15.8071 9.58538
                        15.8071H3.84904C3.64938 15.8071 3.4579 15.7278 3.31672 15.5866C1.86788 14.1377 0.999928 12.5367 0.537609 11.1148C0.0832301 9.7174 0.000142552 8.42537 0.207849
                        7.59455ZM9.26725 14.3015C9.54933 14.0025 9.80359 13.6979 10.0322 13.3914C10.965 12.1406 11.4703 10.8584 11.691 9.80577C11.7965 9.30267 11.8334 8.87025 11.8284
                        8.52994H1.60604C1.59838 9.05604 1.69095 9.79279 1.96944 10.6493C2.34144 11.7933 3.02818 13.0942 4.16717 14.3015H9.26725ZM12.0935 12.9643C13.0969 12.7691 13.6142
                        12.3739 13.8986 11.9949C14.1788 11.6214 14.3043 11.176 14.3577 10.7131H13.0182C12.8197 11.4239 12.5193 12.189 12.0935 12.9643Z"/>
                        </svg>
                        <svg className="stroke-[#000000] dark:stroke-[#f5f1ea]" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M12 3V9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M12 9H9M12 9H15M12 9V15M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg className="fill-[#000000] dark:fill-[#f5f1ea]" width="40px" height="40px" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.50006 2.5C6.47409 2.5 5.59203 2.77691 4.89966 3.37037C4.21227 3.95956 3.76259 4.81729 3.51314 5.88638C3.45869 6.1197 3.57742 6.35885 3.79619 6.45654C4.01496 6.55423 4.27228 6.483 4.40967 6.28672C4.7263 5.8344 5.04244 5.56261 5.3462 5.42313C5.64038 5.28805 5.95748 5.26068 6.32069 5.35797C6.68723 5.45615 6.97097 5.74369 7.41643 6.22816L7.43082 6.24382C7.76661 6.60905 8.17623 7.0546 8.73649 7.40028C9.31785 7.75898 10.0413 7.99999 11.0001 7.99999C12.026 7.99999 12.9081 7.72307 13.6005 7.12962C14.2878 6.54043 14.7375 5.6827 14.987 4.61361C15.0414 4.38029 14.9227 4.14114 14.7039 4.04345C14.4852 3.94576 14.2278 4.01698 14.0904 4.21326C13.7738 4.66559 13.4577 4.93737 13.1539 5.07686C12.8597 5.21194 12.5426 5.23931 12.1794 5.14202C11.8129 5.04384 11.5291 4.7563 11.0837 4.27182L11.0693 4.25616C10.7335 3.89093 10.3239 3.44538 9.76362 3.09971C9.18227 2.74101 8.45883 2.5 7.50006 2.5Z" />
                        <path d="M4.00006 6.99999C2.97409 6.99999 2.09203 7.2769 1.39966 7.87036C0.712271 8.45955 0.262592 9.31727 0.0131365 10.3864C-0.0413057 10.6197 0.0774162 10.8588 0.296186 10.9565C0.514956 11.0542 0.772276 10.983 0.909673 10.7867C1.2263 10.3344 1.54244 10.0626 1.8462 9.92312C2.14038 9.78804 2.45747 9.76067 2.82069 9.85796C3.18723 9.95614 3.47097 10.2437 3.91643 10.7282L3.93082 10.7438C4.2666 11.109 4.67624 11.5546 5.23649 11.9003C5.81785 12.259 6.54128 12.5 7.50006 12.5C8.52602 12.5 9.40808 12.2231 10.1005 11.6296C10.7878 11.0404 11.2375 10.1827 11.487 9.1136C11.5414 8.88027 11.4227 8.64113 11.2039 8.54343C10.9852 8.44574 10.7278 8.51697 10.5904 8.71325C10.2738 9.16558 9.95768 9.43736 9.65391 9.57684C9.35974 9.71192 9.04264 9.7393 8.67942 9.64201C8.31289 9.54383 8.02915 9.25628 7.58369 8.77181L7.56929 8.75615C7.23351 8.39092 6.82388 7.94537 6.26362 7.59969C5.68227 7.241 4.95883 6.99999 4.00006 6.99999Z" />
                        </svg>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Work;