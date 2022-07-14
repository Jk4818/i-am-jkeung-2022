import './src/styles/global.css';
import './src/styles/scroll.css';
import "@fontsource/archivo";
import "@fontsource/anton";
import "@fontsource/limelight";
import "@fontsource/atkinson-hyperlegible";
import "@fontsource/rock-salt";
import React from 'react';
import {AnimatePresence} from 'framer-motion';



export const wrapPageElement = ({element}) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);