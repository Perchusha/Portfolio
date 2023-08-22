import { DataObject } from '../types';

export const findById = (id: string, array: DataObject[]): DataObject | null => {
  const hashTable: Record<string, DataObject> = {};

  for (const obj of array) {
    hashTable[obj.id] = obj;
  }

  return hashTable[id] || null;
};

export const updateElementById = (
  id: string,
  array: DataObject[],
  updatedData: DataObject
): DataObject[] | null => {
  const indexToUpdate = array.findIndex(item => item.id === id);

  if (indexToUpdate !== -1) {
    const updatedArray = [...array];
    updatedArray[indexToUpdate] = { ...updatedArray[indexToUpdate], ...updatedData };
    return updatedArray;
  }

  return null;
};

export const removeElementById = (id: string, array: DataObject[]): DataObject[] | null => {
  const index = array.findIndex(obj => obj.id === id);

  if (index !== -1) {
    const newArray = array.slice();
    newArray.splice(index, 1);
    return newArray;
  }

  return null;
};
