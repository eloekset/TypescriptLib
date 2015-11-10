﻿QUnit.module('Prototypes.String');

QUnit.test('toUpper', function (a: QUnitAssert) {

    a.ok('stian'.toUpper() === 'STIAN');
    a.ok('stian'.toUpper().toLower() === 'stian');
});
QUnit.test('trim', function (a: QUnitAssert) {
    a.ok('stian '.trim() === 'stian');
    a.ok(' stian'.trim() === 'stian');
    a.ok(' stian '.trim() === 'stian');
    a.ok(' stian sandberg '.trim() === 'stian sandberg');
});
QUnit.test('startsWith', function (a: QUnitAssert) {

    a.ok('stian'.startsWith('s'));
    a.ok('stian'.startsWith('sti'));
    a.ok('stian'.startsWith('sti ') === false);
    a.ok('stian'.startsWith('S') === false);
    a.ok('stian'.startsWith('S', true));
});
QUnit.test('endsWith', function (a: QUnitAssert) {

    a.ok('stian'.endsWith('n'));
    a.ok('stian'.endsWith('ian'));
    a.ok('stian'.endsWith('N') === false);
    a.ok('stian'.endsWith('N', true));
});
QUnit.test('contains', function (a: QUnitAssert) {

    a.ok('stian'.contains('ia'));
    a.ok('stian'.contains('a'));
    a.ok('stian'.contains('n'));
    a.ok('stian'.contains('S') === false);
    a.ok('stian'.contains('N') === false);
    a.ok('stian'.contains(' ') === false);
    a.ok('stian'.contains('IaN', true));
});
QUnit.test('left', function (a: QUnitAssert) {

    a.ok('stian'.left(2) === 'st');
    a.ok('stian'.left(4) === 'stia');
    a.ok('stian'.left(10) === 'stian');
});
QUnit.test('right', function (a: QUnitAssert) {

    a.ok('stian'.right(2) === 'an');
    a.ok('stian'.right(4) === 'tian', 'excpected "tian" got ' + 'stian'.right(4));
    a.ok('stian'.right(10) === 'stian');
});
QUnit.test('repeat', function (a: QUnitAssert) {

    a.ok('s'.repeat(3) === 'sss');
    a.ok('SS'.repeat(3) === 'SSSSSS');
    a.ok('1'.repeat(2) === '11');
});
QUnit.test('replaceAll', function (a: QUnitAssert) {

    a.ok('abcdabcd'.replaceAll('a', 'x') === 'xbcdxbcd');
    a.ok('hellohello'.replaceAll('ll', '') === 'heoheo');
});
QUnit.test('padLeft', function (a: QUnitAssert) {
    a.ok('stian'.padLeft(10, '_') === '_____stian');
});
QUnit.test('padRight', function (a: QUnitAssert) {
    a.ok('stian'.padRight(10, '_') === 'stian_____');
});