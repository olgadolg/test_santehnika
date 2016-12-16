var a1 = [2,3,2,4,3,4,5,6,6];

var singleEl = function (arr) {
    var arrLen = arr.length,
        single;

    for (var i = 0; i < arrLen; i++) {
        single ^= arr[i];
    }

    return single;
}(a1);