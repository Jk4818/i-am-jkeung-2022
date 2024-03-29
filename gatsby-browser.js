import './src/styles/global.css';
import './src/styles/scroll.css';
import "@fontsource/archivo";
import "@fontsource/anton";
import "@fontsource/limelight";
import "@fontsource/atkinson-hyperlegible";
import "@fontsource/rock-salt";
import "@fontsource/rubik";
import "@fontsource/tinos";
import "@fontsource/roboto-mono";
import React from 'react';
import {AnimatePresence} from 'framer-motion';

export function wrapPageElement({ element, props }) {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>;
}