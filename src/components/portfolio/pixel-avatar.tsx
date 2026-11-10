export function PixelAvatar() {
  return (
    <div className="pixel-avatar-wrap" aria-label="Pixel-art avatar illustration">
      <div className="pixel-avatar-spark spark-a">✳</div>
      <div className="pixel-avatar-spark spark-b">✦</div>
      <div className="pixel-avatar">
        <span className="pixel-hair" />
        <span className="pixel-face" />
        <span className="pixel-neck" />
        <span className="pixel-shirt" />
        <span className="pixel-shadow" />
      </div>
      <span className="pixel-avatar-label">PLAYER 01 · DEV RAM</span>
    </div>
  );
}
