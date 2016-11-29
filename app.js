/**
 * Created by a.prystupa on 29.11.2016.
 */

const patterns = {
    'baaab': 'w',
    'abbbb': 'e',
    'bbbaa': 'l',
    'bbabb': 'i',
    'babab': 'r',
    'aabba': 'o',
    'aaabb': 'c',
    'abbba': 'k',
    'aabab': 'y',
    'abbaa': 'u'
};

var deShifr = function (message) {
    var newMessage = message.replace(/[ ]+/g, '').match(/.{1,5}/g),
        codedMessage = [], uncodedMessage = '';

    if(newMessage[newMessage.length - 1].length < 5) {
        newMessage.pop();
    }

    for(var stringIndex in newMessage) {
        var codedPart = '';
        for(var char in newMessage[stringIndex]) {
            var letter = newMessage[stringIndex][char],
                key;

            letter == letter.toUpperCase() ? key = 'b' : key = 'a';
            codedPart += key
        }
        codedMessage.push(codedPart);
    }

    for(var pattern in codedMessage) {
        if(patterns.hasOwnProperty(codedMessage[pattern])) {
            uncodedMessage += patterns[codedMessage[pattern]];
        }
    }

    return uncodedMessage;
};

console.log(deShifr('HotsU nBEAT IngdO WNbUR NINgm YFEet JuStW alKIn garOU nDHOt suNmA kiNGm eSWea t'));