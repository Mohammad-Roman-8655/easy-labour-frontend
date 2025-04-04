import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';

function Faq({ title, desc }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-5xl mx-auto w-full transition-all duration-500">
      <motion.div
        layout
        className="rounded-2xl shadow-lg mb-5 bg-white/80 backdrop-blur-md border border-gray-200 overflow-hidden hover:shadow-xl"
      >
        <div
          className="flex justify-between items-center px-6 py-5 cursor-pointer group"
          onClick={() => setOpen(!open)}
        >
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-all">
            {title}
          </h2>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {open ? (
              <AiOutlineMinus className="text-blue-600 text-2xl" />
            ) : (
              <AiOutlinePlus className="text-gray-600 text-2xl" />
            )}
          </motion.div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="px-6 pb-5 text-gray-700 text-base bg-blue-50/60"
            >
              <p className="leading-relaxed">{desc}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Faq;
