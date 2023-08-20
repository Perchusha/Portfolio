import { DataObject, ID } from '../types';

export const findById = (id: ID, array: DataObject[]): DataObject | null => {
  const hashTable: Record<ID, DataObject> = {};

  for (const obj of array) {
    hashTable[obj.id] = obj;
  }

  return hashTable[id] || null;
};

export const updateElementById = (id: ID, array: DataObject[], updatedData: DataObject): DataObject[] | null => {
  const indexToUpdate = array.findIndex(item => item.id === id);

  if (indexToUpdate !== -1) {
    const updatedArray = [...array];
    updatedArray[indexToUpdate] = { ...updatedArray[indexToUpdate], ...updatedData };
    return updatedArray;
  }

  return null;
};

export const removeElementById = (id: ID, array: DataObject[]): DataObject[] | null => {
  const index = array.findIndex(obj => obj.id === id);

  if (index !== -1) {
    const newArray = array.slice();
    newArray.splice(index, 1);
    return newArray;
  }

  return null;
};
