var a = [ 001, 002, 004, 006, 007, 012, 014, 017, 021, 023,  // 10
          024, 025, 031, 034, 037, 042, 045, 063, 067, 069,  // 20
          070, 072, 073, 078, 081, 093, 096, 097, 099, 100,  // 30
          101, 108, 114, 121, 132, 145, 152, 155, 157, 158,  // 40
          162, 164, 166, 175, 179, 180, 184, 186, 189, 193,  // 50
          199, 201, 203, 206, 211, 214, 227, 231, 245, 251,  // 60
          267, 288, 293, 297, 298, 300, 303, 305, 307, 312,  // 70
          321, 334, 338, 343, 347, 364, 378, 385, 389, 394,  // 80
          402, 404, 408, 412, 421, 423, 435, 447, 454, 459,  // 90
          462, 466, 473, 474, 477, 483, 488, 491, 497, 500,  // 100
        ];

a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

a.sort(function (a, b) {
    return a - b;
});

var cnt = 0;


/**
 * Performs a binary search on the provided sorted arr and returns the
 * index of the item if found. If it can't be found it'll return -1.
 *
 * @param {*[]} arr Items to search through.
 * @param {*} item The item to look for.
 * @return {Number} The index of the item if found, -1 if not.
 */
function binarySearch(arr, item) {
  var min = 0;
  var max = arr.length - 1;
  var guess;

  while (min <= max) {
    cnt += 1;
    guess = Math.floor((min + max) / 2);

    if (arr[guess] === item) {
      return guess;
    }
    else {
      if (arr[guess] < item) {
        min = guess + 1;
      }
      else {
        max = guess - 1;
      }
    }
  }

  return -1;
}

function search(value) {
  // console.log('a,', a);
  console.log('a.length', a.length);
  var result = binarySearch(a, value);
  console.log("Found " + result + " in " + cnt + " attempts.");
  cnt = 0;
  console.log();
}

for (var i=1; i<=10; i++) {
  search(i);
}

// search(132);
// search(474);
// search(497);
