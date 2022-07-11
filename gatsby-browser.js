import './src/styles/global.css';
import "@fontsource/archivo";
import "@fontsource/anton";
import "@fontsource/limelight";
import "@fontsource/atkinson-hyperlegible";
import React from 'react';
import {AnimatePresence} from 'framer-motion';

export const wrapPageElement = ({element}) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);