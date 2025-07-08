import { useEffect } from 'react';

const DownloadResume = () => {
  useEffect(() => {
    // Open the PDF in a new tab
    window.open("/Resume.pdf", "_blank");
  }, []);

  return <p className="text-white text-center mt-10">Opening resume in new tab...</p>;
};

export default DownloadResume;
