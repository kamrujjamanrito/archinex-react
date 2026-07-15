"use client";

interface YoutubeEmbedProps {
  embedId: string;
  params?: string;
  title?: string;
}

const YoutubeEmbed = ({
  embedId,
  params = "",
  title = "YouTube video",
}: YoutubeEmbedProps) => {
  const src = `https://www.youtube.com/embed/${embedId}${params}`;

  return (
    <div className="video-wrapper">
      <iframe
        className="video-iframe"
        src={src}
        title={title}
        width="400"
        height="400"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"
      />
    </div>
  );
};

export default YoutubeEmbed;
