export default function Media() {
  const videoUrl = "https://storage.googleapis.com/primesecure/video.mp4";
  const videoUrl2 =
    "https://storage.googleapis.com/primesecure/WhatsApp%20Video%202024-08-06%20at%2007.45.12.mp4";
  const img1Url = "https://storage.googleapis.com/primesecure/img-rm-01.jpeg";
  const img2Url = "https://storage.googleapis.com/primesecure/img-rm-02.jpeg";
  const img3Url =
    "https://storage.googleapis.com/primesecure/WhatsApp%20Image%202024-08-06%20at%2007.45.04.jpeg";
  const img4Url =
    "https://storage.googleapis.com/primesecure/WhatsApp%20Image%202024-08-06%20at%2007.42.42%20(1).jpeg";

  return (
    <div className="flex flex-col m-6">
      <div className="flex flex-col md:flex-row">
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

      <div className="flex flex-col md:flex-row mt-4">
        <div className="w-full md:w-1/3 rounded-md">
          <img
            className="w-full mb-4 md:mb-0 rounded-md p-1"
            src={img3Url}
            alt="Imagem 3"
          />
        </div>
        <div className="w-full md:w-1/3 rounded-md">
          <video
            className="w-full rounded-md p-1"
            src={videoUrl2}
            controls
          ></video>
        </div>
        <div className="w-full md:w-1/3 rounded-md">
          <img
            className="w-full mt-4 md:mt-0 rounded-md p-1"
            src={img4Url}
            alt="Imagem 4"
          />
        </div>
      </div>
    </div>
  );
}
