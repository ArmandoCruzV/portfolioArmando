import React from 'react';
import './style.css'

interface MultiLayerParallaxProps {
  layers: { image: string; speed: number }[];
  height: string;
  children: React.ReactNode;
}

const Parallax: React.FC<MultiLayerParallaxProps> = ({ layers, height, children }) => {
  return (
    <div className="multi-layer-parallax" style={{ height }}>
      {layers.map((layer, index) => (
        <div
          key={index}
          className="layer"
          style={{
            backgroundImage: `url(${layer.image})`,
            transform: `translateY(${layer.speed}%)`,
          }}
        />
      ))}
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Parallax;
