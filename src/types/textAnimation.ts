import { Transition, Variants } from 'framer-motion';

// Интерфейс для параметров анимации
interface AnimationOptions {
  x?: number;
  y?: number;
  opacity?: number;
  delayMultiplier?: number; // Задержка для custom
}

// Функция, создающая объект анимации
export const createTextAnimation = ({
  x = 0,
  y = 0,
  opacity = 0,
  delayMultiplier = 0.2,
}: AnimationOptions): Variants => ({
  hidden: {
    x,
    y,
    opacity,
  },
  visible: (custom: number): { x: number; y: number; opacity: number; transition: Transition } => ({
    x: 0,
    y: 0,
    opacity: 1,
    transition: { delay: custom * delayMultiplier },
  }),
});
