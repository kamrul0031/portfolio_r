import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import particleConfig from './Particle.config';

const ParticleBg = () => {
    // const [ init, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
         })
        //.then(() => {
        //     setInit(true);
        // });
    }, []);
  return (
    <Particles
      id="tsparticles"
      options={particleConfig}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default ParticleBg;
