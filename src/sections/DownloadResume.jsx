import { useEffect } from 'react';

const DownloadResume = () => {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf"; // file must be in /public
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return <p className="text-white text-center mt-10">Downloading resume...</p>;
};

export default DownloadResume;
