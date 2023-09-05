import { Container } from "postcss";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
function Particle() {

    const particlesInit = async (main) => {
        console.log(main);

        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    }

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}

            options={{
                fpsLimit: 144,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
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
                            distance: 70,
                            duration: 0.5,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#3a3131",
                    },
                    links: {
                        color: "#7c7878",
                        distance: 170,
                        enable: true,
                        opacity: 0.4,
                        width: 2,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.6,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 0.7, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};
export default Particle
