import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BackCard from "./BackCard";

const Card3D = () => {
    const cardRef = useRef(null);
    const glareRef = useRef(null);
    const x = useMotionValue(410);
    const y = useMotionValue(210);
    const glareX = useMotionValue(0);
    const glareY = useMotionValue(0);
    const rotateY = useTransform(x, [0, 820], [20, -20]);
    const rotateX = useTransform(y, [0, 420], [-20, 20]);

    const rotateYSpring = useSpring(rotateY, { damping: 30, stiffness: 100 });
    const rotateXSpring = useSpring(rotateX, { damping: 30, stiffness: 100 });
    const [isFlipped, setIsFlipped] = useState(false);
    const controls = useAnimation();
    const navigate = useNavigate();

    const handleClick = () => {
        setIsFlipped(!isFlipped);
        if (!isFlipped) {
            controls.start({ scale: 2, opacity: 0 }).then(() => {
                navigate("/website");
            });
        } else {
            controls.start({ scale: 1, opacity: 1 }).then(() => {
                navigate("/");
            });
        }
    };

    // useEffect(() => {
    //     const handleResize = () => {
    //         if (cardRef.current) {
    //             const cardRect = cardRef.current.getBoundingClientRect();
    //             if (window.innerWidth >= 768) { 
    //                 x.set(210);
    //                 y.set(410);
    //                 rotateY.set([20, -20]);
    //                 rotateX.set([-20, 20]);
    //             } else {
    //                 x.set(48);
    //                 y.set(78);
    //                 rotateY.set([40, -40]); 
    //                 rotateX.set([-40, 40]);
    //             }
    //         }
    //     };
    

    //     handleResize();

    //     window.addEventListener("resize", handleResize);

    //     return () => window.removeEventListener("resize", handleResize);
    // }, [x, y, rotateY, rotateX]);

    // useEffect(() => {
    //     const handleDeviceOrientation = (event) => {
    //         if (!cardRef.current || !glareRef.current || isFlipped) return;
    //         const { beta, gamma } = event;
    //         const cardRect = cardRef.current.getBoundingClientRect();
    //         // x.set((gamma / 90) * cardRect.width / 2 + cardRect.width / 2);
    //         // y.set((beta / 90) * cardRect.height / 2 + cardRect.height / 2);
    //         x.set((gamma / 90) * 410 + 410);
    //         y.set((beta / 90) * 40 + 40);
    //         glareX.set((gamma / 90) * cardRect.width / 2 - glareRef.current.getBoundingClientRect().width / 2);
    //         glareY.set((beta / 90) * cardRect.height / 2 - glareRef.current.getBoundingClientRect().height / 2);
    //     };

    //     if (window.DeviceOrientationEvent) {
    //         window.addEventListener("deviceorientation", handleDeviceOrientation, true);
    //     }

    //     return () => {
    //         if (window.DeviceOrientationEvent) {
    //             window.removeEventListener("deviceorientation", handleDeviceOrientation, true);
    //         }
    //     };
    // }, [isFlipped, x, y, glareX, glareY]);

    return (
        <motion.div 
            className='w-96 aspect-card xl:w-[800px] xl:aspect-card2 rounded-32 relative overflow-hidden cursor-pointer' 
            onMouseMove={(e) => {
                if (!cardRef.current || !glareRef.current || isFlipped) return;
                const cardRect = cardRef.current.getBoundingClientRect();
                const glareRect = glareRef.current.getBoundingClientRect();
                x.set(e.clientX - cardRect.left);
                y.set(e.clientY - cardRect.top);
                glareX.set(e.clientX - cardRect.left - glareRect.width / 2);
                glareY.set(e.clientY - cardRect.top - glareRect.height / 2);
            }}
            onMouseLeave={() => {
                if (!cardRef.current || !glareRef.current || isFlipped) return;
                const cardRect = cardRef.current.getBoundingClientRect();
                x.set(cardRect.width / 2);
                y.set(cardRect.height / 2);
                glareX.set(-2000);
                glareY.set(-2000);
            }}
            onClick={handleClick}
            animate={controls}
            ref={cardRef}
            style={{
                rotateY: rotateYSpring,
                rotateX: rotateXSpring,
            }}
        >
            <div className='absolute inset-0'>
                <motion.div className={`absolute inset-0 ${isFlipped ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
                    <motion.div className='bg-gradient-radial from-white from-20% to-white/0 to-70% opacity-25 absolute size-[600px]'
                        whileHover={{ scale: 1.1 }}
                        style={{
                            x: glareX,
                            y: glareY,
                        }}
                        ref={glareRef}
                    />
                    <div className='absolute inset-4 bg-white rounded-32 flex flex-col xl:flex-row'>
                        <div className='h-32 xl:h-full xl:w-1/2 relative border-4 xl:border-none border-white rounded-32 xl:rounded-32-tl-bl custom-shape flex justify-center items-center'>
                        <div className="absolute rounded-32-tl-tr xl:rounded-32-tl-bl inset-0 bg-white bg-opacity-10"></div>
                            <div className='xl:p-4 absolute xl:top-0 xl:left-0 xl:w-full xl:h-full flex justify-center xl:justify-start items-center'>
                            <svg className="w-28 h-28 xl:w-56 xl:h-56" viewBox="0 0 100 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M97 51.4681C97 77.1015 75.9877 97.9362 50 97.9362C24.0123 97.9362 3 77.1015 3 51.4681C3 25.8346 24.0123 5 50 5C75.9877 5 97 25.8346 97 51.4681Z" fill="white" fillOpacity="0.7" stroke="black" strokeWidth="6"/>
                                <mask id="path-2-outside-1_24_117" maskUnits="userSpaceOnUse" x="35" y="18" width="40" height="67" fill="black">
                                    <rect fill="white" x="35" y="18" width="40" height="67"/>
                                    <path d="M60.23 52.76L58.88 50.42L63.92 47.54C68.06 45.26 70.13 41.63 70.13 36.65C70.13 27.35 63.05 22.7 48.89 22.7H40.61V83H37.91V20H48.89C56.81 20 62.78 21.47 66.8 24.41C70.82 27.29 72.83 31.37 72.83 36.65C72.83 42.65 70.31 47.06 65.27 49.88L60.23 52.76Z"/>
                                </mask>
                                <path d="M60.23 52.76L58.88 50.42L63.92 47.54C68.06 45.26 70.13 41.63 70.13 36.65C70.13 27.35 63.05 22.7 48.89 22.7H40.61V83H37.91V20H48.89C56.81 20 62.78 21.47 66.8 24.41C70.82 27.29 72.83 31.37 72.83 36.65C72.83 42.65 70.31 47.06 65.27 49.88L60.23 52.76Z" fill="black"/>
                                <path d="M60.23 52.76L58.4976 53.7594L59.493 55.4847L61.2223 54.4965L60.23 52.76ZM58.88 50.42L57.8877 48.6835L56.144 49.6799L57.1476 51.4194L58.88 50.42ZM63.92 47.54L62.9552 45.7881L62.9414 45.7957L62.9277 45.8035L63.92 47.54ZM40.61 22.7V20.7H38.61V22.7H40.61ZM40.61 83V85H42.61V83H40.61ZM37.91 83H35.91V85H37.91V83ZM37.91 20V18H35.91V20H37.91ZM66.8 24.41L65.6194 26.0243L65.6273 26.0301L65.6352 26.0358L66.8 24.41ZM65.27 49.88L64.2934 48.1346L64.2856 48.139L64.2777 48.1435L65.27 49.88ZM61.9624 51.7606L60.6124 49.4206L57.1476 51.4194L58.4976 53.7594L61.9624 51.7606ZM59.8723 52.1565L64.9123 49.2765L62.9277 45.8035L57.8877 48.6835L59.8723 52.1565ZM64.8848 49.2919C67.2342 47.998 69.0743 46.2737 70.3149 44.0982C71.5523 41.9283 72.13 39.4207 72.13 36.65H68.13C68.13 38.8593 67.6727 40.6567 66.8401 42.1168C66.0107 43.5713 64.7458 44.802 62.9552 45.7881L64.8848 49.2919ZM72.13 36.65C72.13 31.4045 70.0832 27.2515 65.9179 24.5158C61.8993 21.8765 56.1253 20.7 48.89 20.7V24.7C55.8147 24.7 60.6607 25.8485 63.7221 27.8592C66.6368 29.7735 68.13 32.5955 68.13 36.65H72.13ZM48.89 20.7H40.61V24.7H48.89V20.7ZM38.61 22.7V83H42.61V22.7H38.61ZM40.61 81H37.91V85H40.61V81ZM39.91 83V20H35.91V83H39.91ZM37.91 22H48.89V18H37.91V22ZM48.89 22C56.6174 22 62.091 23.4439 65.6194 26.0243L67.9806 22.7957C63.469 19.4961 57.0026 18 48.89 18V22ZM65.6352 26.0358C69.0907 28.5114 70.83 31.9637 70.83 36.65H74.83C74.83 30.7763 72.5493 26.0686 67.9648 22.7842L65.6352 26.0358ZM70.83 36.65C70.83 39.3654 70.2619 41.6131 69.2035 43.4652C68.1474 45.3134 66.5408 46.8772 64.2934 48.1346L66.2466 51.6254C69.0392 50.0628 71.2126 48.0115 72.6765 45.4498C74.1381 42.8919 74.83 39.9346 74.83 36.65H70.83ZM64.2777 48.1435L59.2377 51.0235L61.2223 54.4965L66.2623 51.6165L64.2777 48.1435Z" fill="black" mask="url(#path-2-outside-1_24_117)"/>
                                <rect x="3" y="54" width="23" height="5" fill="black"/>
                                <rect x="3" y="54" width="23" height="5" fill="black"/>
                                <rect x="3" y="54" width="23" height="5" fill="black"/>
                                <rect x="74" y="55" width="24" height="5" fill="black"/>
                                <rect x="74" y="55" width="24" height="5" fill="black"/>
                                <rect x="74" y="55" width="24" height="5" fill="black"/>
                            </svg>

                            </div>
                        </div>
                        <div className='xl:w-1/2 flex flex-col xl:p-8 rounded-32-tr-br items-center relative'>
                            <div className=''>
                                <div className='bg-slate-800 shadow-[rgba(0,0,0,0.8)_1px_1px_15px] p-2 rounded-xl flex justify-center -translate-y-6'>
                                    <span className='text-white xl:text-xl font-bold'>Développeur Web</span>
                                </div>
                            </div>
                            <div className='text-black flex flex-col items-center xl:items-start xl:mt-6 rounded-32 shadow-[rgba(0,0,0,0.3)_1px_1px_1px] xl:shadow-none'>
                                <h1 className='text-xl font-extrabold mb-4'>Geoffrey Pignet</h1>
                                <div className="flex flex-col p-6 xl:p-0 xl:shadow-none rounded-32 gap-2">
                                <p className='text-md'>Nouvelle Aquitaine</p>
                                <p className='text-md'>06 80 42 38 08</p>
                                <p className='text-md'>geoffreypignet@yahoo.fr</p>
                                <p className='text-md'>www.linkedin.com/in/geoffrey-pignet</p>
                                </div>
                            </div>
                            <button className="mt-10 bg-slate-900 px-10 py-2 rounded-full text-white w-1/2" onClick={handleClick}>Site web</button>
                        </div>
                    </div>
                </motion.div>
                <motion.div className={`absolute inset-0 ${isFlipped ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
                    <BackCard />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Card3D;
