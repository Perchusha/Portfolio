import fs from 'fs';

export const readFile = async (path: string): Promise<string> => {
  let resultData: string = '';

  return new Promise((resolve, reject) => {
    try {
      const streamRead = fs.createReadStream(path, {
        encoding: 'utf8',
      });

      streamRead.on('data', (data: string) => {
        resultData += data;
      });

      streamRead.on('end', () => {
        streamRead.close();
        resolve(resultData);
      });

      streamRead.on('error', error => {
        console.log('Something went wrong while streaming the file.', error.message);
      });
    } catch (error) {
      reject(error);
    }
  });
};

export const writeFile = async (path: string, data: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      const writeStream = fs.createWriteStream(path, {
        encoding: 'utf8',
      });

      writeStream.on('error', error => {
        console.log('Something went wrong while streaming the file.', error.message);
      });

      writeStream.write(data);
      writeStream.end();
      writeStream.close();
      resolve('Done');
    } catch (error) {
      reject(error);
    }
  });
};
