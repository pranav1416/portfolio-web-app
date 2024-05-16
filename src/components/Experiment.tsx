import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedComponents = () => {
    const controls = useAnimation();
    const trailControls = useAnimation();

    const imageVariants = {
        initial: {
            opacity: 0,
            scale: 1
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8 }
        },
        resized: {
            scale: 0.5,
            x: '0%',
            y: '50%',
            transition: { duration: 0.8 }
        }
    };

    const trailVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: any) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.3 + 1.6 } // starts after image resize
        })
    };

    const trailItems = ['First Item', 'Second Item', 'Third Item'];

    useEffect(() => {
        controls.start('visible').then(() => {
            controls.start('resized').then(() => {
                trailControls.start(i => 'visible');
            });
        });
    }, [controls, trailControls]);

    return (
        <div className='flex flex-col h-full'>
            <motion.div
                className="image-container"
                variants={imageVariants}
                initial="initial"
                animate={controls}
            >
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt="Beautiful Image" />
            </motion.div>
            
            {trailItems.map((item, index) => (
                <motion.div
                    key={item}
                    custom={index}
                    variants={trailVariants}
                    initial="hidden"
                    animate={trailControls}
                    className="trail-item"
                >
                    {item}
                </motion.div>
            ))}
        </div>
    );
};

export default AnimatedComponents;
