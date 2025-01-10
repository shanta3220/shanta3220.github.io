import React, { useRef, useEffect, useState } from "react";

function Video({ videoSrc, thumbnailImage, thumbnailTime }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [thumbnail, setThumbnail] = useState(thumbnailImage);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas && !thumbnailImage) {
      const handleMetadataLoaded = () => {
        video.currentTime = thumbnailTime;
      };

      const handleSeeked = () => {
        const context = canvas.getContext("2d");
        canvas.width = 600;
        canvas.height = 600 * (video.videoHeight / video.videoWidth); // Maintain aspect ratio
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const dataUrl = canvas.toDataURL("image/png");
        setThumbnail(dataUrl);
      };

      video.addEventListener("loadedmetadata", handleMetadataLoaded);
      video.addEventListener("seeked", handleSeeked);

      return () => {
        video.removeEventListener("loadedmetadata", handleMetadataLoaded);
        video.removeEventListener("seeked", handleSeeked);
      };
    }
  }, [thumbnailTime, thumbnailImage]);

  if (!thumbnailImage && !thumbnailTime) {
    return (
      <div>
        <video
          ref={videoRef}
          src={videoSrc}
          style={{
            width: `100%`,
            height: "auto",
          }}
        />
      </div>
    );
  }
  return (
    <div>
      {thumbnail ? (
        <img
          src={thumbnail}
          alt="Video Thumbnail"
          style={{
            width: `100%`,
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        />
      ) : (
        <p>Loading thumbnail...</p>
      )}
      <video ref={videoRef} src={videoSrc} style={{ display: "none" }} />
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}

export default Video;
