
import React, { useEffect, useRef, useState } from 'react';
const ResizableComponent: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ width: number; height: number }>({ width: 300, height: 200 });
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        requestAnimationFrame(() => {
          setSize({
            width: entry.contentRect.width,
            height: entry.contentRect.height,
          });
        });
      }
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <div
      ref={ref}
      style={{
        resize: 'both',
        overflow: 'auto',
        border: '1px solid black',
        padding: '10px',
        width: `${size.width}px`,
        height: `${size.height}px`,
      }}
    >
      <p>Redimensione este elemento!</p>
      <p>
        Largura: {size.width}px, Altura: {size.height}px
      </p>
    </div>
  );
};
export default ResizableComponent;