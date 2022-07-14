import React, { useCallback, useMemo } from 'react';
import { loadSlim } from "tsparticles-slim";

import Particles from "react-tsparticles";

function StarParticle(props) {
  // this customizes the component tsParticles installation
  const options = useMemo(() => {
    return {
      "fullScreen": {
        "enable": false
      },
      "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#fcf6f4"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 1.75,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "size_min": 0.2,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 0.2,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 600
          }
        }
      },
      "retina_detect": true
    };
  }, []);

  const particlesInit = useCallback(
    (engine) => {
      loadSlim(engine);
    },
    [],
  );


  return <Particles options={options} init={particlesInit} />;

}

export default StarParticle;