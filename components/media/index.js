export default function Media() {
  const videoUrl = "https://storage.googleapis.com/primesecure/video.mp4";
  const img1Url = "https://storage.googleapis.com/primesecure/img-rm-01.jpeg";
  const img2Url = "https://storage.googleapis.com/primesecure/img-rm-02.jpeg";

  return (
    <div className="flex flex-col md:flex-row m-6">
      <div className="w-full md:w-1/3 rounded-md">
        <img
          className="w-full mb-4 md:mb-0 rounded-md p-1"
          src={img1Url}
          alt="Imagem 1"
        />
      </div>
      <div className="w-full md:w-1/3 rounded-md">
        <video
          className="w-full rounded-md p-1"
          src={videoUrl}
          controls
        ></video>
      </div>
      <div className="w-full md:w-1/3 rounded-md">
        <img
          className="w-full mt-4 md:mt-0 rounded-md p-1"
          src={img2Url}
          alt="Imagem 2"
        />
      </div>
    </div>
  );
}
