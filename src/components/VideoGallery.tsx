
import React from 'react';
const videos = [
  { id: 1, src: '', title: 'Técnica de Corte de Cabelo' },
  { id: 2, src: '', title: 'Coloração de Cabelo' },
];
const VideoGallery: React.FC = () => {
  return (
    <div className="video-gallery">
      <h2>Galeria de Vídeos</h2>
      {videos.map((video) => (
        <div key={video.id} className="video-item">
          <h3>{video.title}</h3>
          <iframe
            src={video.src}
            width="300"
            height="200"
            title={video.title}
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};
export default VideoGallery;