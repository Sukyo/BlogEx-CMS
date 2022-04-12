// 定义图片转换方法
export const base64ToBlob = (base64Image: string): Blob => {
  // Split into two parts
  const parts = base64Image.split(';base64,');
  // Hold the content type
  const imageType = parts[0].split(':')[1];
  // Decode Base64 string
  const decodedData = window.atob(parts[1]);
  // Create UNIT8ARRAY of size same as row data length
  const uInt8Array = new Uint8Array(decodedData.length);
  // Insert all character code into uInt8Array
  for (let i = 0; i < decodedData.length; ++i) {
    uInt8Array[i] = decodedData.charCodeAt(i);
  }
  // Return BLOB image after conversion
  return new Blob([uInt8Array], { type: imageType });
};

export const blobToFile = (theBlob: Blob, fileName: string): File => {
  const options = { lastModified: new Date().getTime(), type: theBlob.type };
  return new File(
    [theBlob],
    fileName,
    options,
  );
};
