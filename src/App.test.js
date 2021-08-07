
import App from './App';

test('should divide the original array into equal parts when originalArrayLength % numberOfArrays is zero', () => {
  const origArray=[1,2,3,4,5,6];
  const numberOfArrays =2;
  const expectedArray =  [[1, 2, 3], [4, 5, 6]];
  const result = App(origArray, numberOfArrays);
  expect(result).toHaveLength(2);
  expect(result).toEqual(expectedArray);
});

test('should divide the original array into parts when originalArrayLength % numberOfArrays is not zero', () => {
  const origArray=[1,2,3,4,5,6,7];
  const numberOfArrays =3;
  const expectedArray =  [[1, 2], [3, 4], [ 5, 6, 7]];
  const result = App(origArray, numberOfArrays);
  expect(result).toHaveLength(3);
  expect(result).toEqual(expectedArray);
});

test('should return original array when originalArrayLength is less than numberOfArrays', () => {
  const origArray=[1,2,3,4,5,6,7,8,9];
  const numberOfArrays =10;
  const expectedArray =  [1,2,3,4,5,6,7,8,9];
  const result = App(origArray, numberOfArrays);
  expect(result).toHaveLength(9);
  expect(result).toEqual(expectedArray);
});

test('should return an error message when original array length is zero', () => {
  const origArray=[];
  const numberOfArrays =2;
  const result = App(origArray, numberOfArrays);
  expect(result).toEqual((Error('Could not divide an empty array')));
});