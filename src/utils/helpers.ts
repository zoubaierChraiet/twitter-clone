export const getFileBase64 = async (file: Blob) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    try {
      fileReader.onload = (ev: ProgressEvent<FileReader>) => {
        let imageResult = ev.target?.result;
        if (imageResult) {
          resolve(imageResult);
        } else {
          reject("Error loading the image");
        }
      };
    } catch (err) {
      reject("Upload error!!");
    }
  });
};
