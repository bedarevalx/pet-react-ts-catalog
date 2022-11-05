import React, { useState } from 'react';
import axios from '../axiosInstance';

const MAX_FILES_COUNT = 4;

const useFileLoad = (photoUrls?: string[]) => {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const onFileInputChange = async (files: FileList | null) => {
    if (!files) {
      return;
    }
    if(uploadedFiles.length + files.length > MAX_FILES_COUNT){
      alert('Max files: '+MAX_FILES_COUNT)
      return;
    }
    const base64Files: string[] = [];

    for (let i = 0; i < files.length; i++) {
      base64Files.push((await fileToBase64(files.item(i) as File)) as string);
    }

    setUploadedFiles((prev) => [...prev, ...base64Files]);
  };

  const fileToBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  function blobToBase64(blob: Blob) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }
  const handleDeleteImage = (index: number) => {
    setUploadedFiles((prev) => prev.filter((prevImage, i) => i !== index));
  };

  async function fetchImages() {
    if (!photoUrls) return;
    const responses = await Promise.all(
      photoUrls.map(
        async (photoUrl) =>
          await axios.get(`${photoUrl}`, { responseType: 'blob' }),
      ),
    );

    const base64Images = await Promise.all(
      responses.map(async (response) => await blobToBase64(response.data)),
    );
    setUploadedFiles(base64Images as string[]);
  }

  return { uploadedFiles, onFileInputChange, fetchImages, handleDeleteImage };
};

export default useFileLoad;
