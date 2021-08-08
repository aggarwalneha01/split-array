## Problem

* Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N
equally sized arrays.

* Where the size of the original array cannot be divided equally by N, the final part should have a length equal to the remainder.
## Example Pseudo-code
```bash
groupArrayElements([1, 2, 3, 4, 5], 3);
// [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
```
## Development

Requires Node.js to be installed.

### Setup

```bash
npm install
```
### To run tests:

* In a terminal/command line navigate to the project directory.
* Type `npm install`
* Type `npm test`

The tests are located in test/App.test.js file
### The following scenarios are covered:
* When the length of the array can be divided in to equal parts.
* When the length of the array can not be divided in to equal parts. In this case the last part will habve the length equal to the remainder.
* When the number of parts are more than the length of the array. In this case the original array will be returned.
* When the array is empty, then the error message is returned.


