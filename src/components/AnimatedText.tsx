import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0.25, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.3em] select-text">
      {word}
    </motion.span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const words = text.split(/\s+/).filter(Boolean);
  const totalWords = words.length;

  return (
    <p ref={containerRef} className={className} style={style}>
      {words.map((word, index) => {
        const start = index / totalWords;
        const end = Math.min(1, (index + 1) / totalWords);
        return (
          <Word
            key={index}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};

export default AnimatedText;
