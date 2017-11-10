function isogram(str) {
    var answer = '';
    for (var i = 0; i < str.length; i++) {
        for (var x = 1; x < str.length; x++) {
            if (str[i] == str[x]) {
                answer = `${i} has duplication`
            } else {
                answer = `${i} has no duplication`
            }

        }

    }
    return answer;

}
console.log(isogram('mercy'))