import { useEffect } from 'react';
import { useLocation, Location } from 'react-router-dom';

const ScrollToAnchor: React.FC = () => {
  const { hash }: Location = useLocation(); // Получаем #anchor из URL

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null; // Компонент ничего не рендерит, он просто выполняет логику
};

export default ScrollToAnchor;
