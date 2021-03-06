﻿QUnit.module('TimeSpan');

QUnit.test('ts', function (a: QUnitAssert) {

    var ts = TimeSpan.FromMinutes(60);
    a.ok(ts.totalMinutes() === 60);
    a.ok(ts.totalSeconds() === (60 * 60));
    a.ok(ts.totalHours() === 1);

    a.ok(TimeSpan.FromMinutes(90).totalHours() === 1.5);
    a.ok(TimeSpan.FromMinutes(105).totalHours() === 1.75);

    a.ok(TimeSpan.FromMinutes(105).totalHours(true) === 1);
    a.ok(TimeSpan.FromMinutes(119).totalHours(true) === 1);
});
