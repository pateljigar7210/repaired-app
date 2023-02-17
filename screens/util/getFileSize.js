import * as FileSystem from 'expo-file-system';

export default async function getFileSize(fileUri) {
  const fileInfo = await FileSystem.getInfoAsync(fileUri);
  return fileInfo.size;
};