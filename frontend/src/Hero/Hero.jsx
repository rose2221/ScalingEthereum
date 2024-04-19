import background from '../assets/background.jpg'
import { Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
function Hero({visible , signOutVisible}) {

  const [ init, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {

            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };


    return (
      
      <>
      { init && <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#070713",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 200,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
}
       <div>
       <div>
       <div className="content ">

</div>
       </div>
        <div className='w-[94vw]  h-[40vw] z-555 hero__content absolute flex flex-row'>
            <div className='hero__child'>
                <h1 className='title'>Lorem Ipsum Dolor Sit Amet</h1>
                {!visible ? <Button color='primary' className="font-500">Become a Prove</Button> : null}
               {!visible ? <Link to='/request'><Button color='primary' className="font-500">Submit a Prove Request</Button></Link>  : null}
            </div>
            <div className='hero__child'></div>
        </div>         
       </div>
      </>
    )
  }
  
  export default Hero
  