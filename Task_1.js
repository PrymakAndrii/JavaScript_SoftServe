//Bubble Sort
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = n - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
}
const arr = [64, 34, 25, -12, 22, 11, 90, -1, 0, 5, 3, -20];
console.log("Not sorted array: " + arr);
console.log("Sorted array: " + bubbleSort(arr));

// Selection Sort
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
const arr2 = [64, 34, 25, -12, 22, 11, 90, -1, 0, 5, 3, -20];
console.log("Not sorted array: " + arr2);
console.log("Sorted array: " + selectionSort(arr2));

// Insertion Sort
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
const arr3 = [64, 34, 25, -12, 22, 11, 90, -1, 0, 5, 3, -20];
console.log("Not sorted array: " + arr3);
console.log("Sorted array: " + insertionSort(arr3));
