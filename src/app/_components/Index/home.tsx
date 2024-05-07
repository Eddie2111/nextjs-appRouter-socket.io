"use client";
import React from 'react';

import { motion } from 'framer-motion';

export function AppHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center my-[30vh]"
    >
      {children}
    </motion.div>
  );
}
