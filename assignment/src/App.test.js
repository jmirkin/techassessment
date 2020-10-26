import React from "react";
import { findAll, objectIs } from "./util";

test("objectIs", function () {
  expect(objectIs(42, 42) === true).toEqual(true);
  expect(objectIs("foo", "foo") === true).toEqual(true);
  expect(objectIs(false, false) === true).toEqual(true);
  expect(objectIs(null, null) === true).toEqual(true);
  expect(objectIs(undefined, undefined) === true).toEqual(true);
  expect(objectIs(NaN, NaN) === true).toEqual(true);
  expect(objectIs(-0, -0) === true).toEqual(true);
  expect(objectIs(0, 0) === true).toEqual(true);
  expect(objectIs(-0, 0) === false).toEqual(true);
  expect(objectIs(0, -0) === false).toEqual(true);
  expect(objectIs(0, NaN) === false).toEqual(true);
  expect(objectIs(NaN, 0) === false).toEqual(true);
  expect(objectIs(42, "42") === false).toEqual(true);
  expect(objectIs("42", 42) === false).toEqual(true);
  expect(objectIs("foo", "bar") === false).toEqual(true);
  expect(objectIs(false, true) === false).toEqual(true);
  expect(objectIs(null, undefined) === false).toEqual(true);
  expect(objectIs(undefined, null) === false).toEqual(true);
});

test("coercion", function () {
  var myObj = { a: 2 };

  var values = [
    null,
    undefined,
    -0,
    0,
    13,
    42,
    NaN,
    -Infinity,
    Infinity,
    "",
    "0",
    "42",
    "42hello",
    "true",
    "NaN",
    true,
    false,
    myObj,
  ];

  expect(setsMatch(findAll(null, values), [null, undefined]) === true).toEqual(
    true
  );
  expect(
    setsMatch(findAll(undefined, values), [null, undefined]) === true
  ).toEqual(true);
  expect(setsMatch(findAll(0, values), [0, "0"]) === true).toEqual(true);
  expect(setsMatch(findAll(-0, values), [-0]) === true).toEqual(true);
  expect(setsMatch(findAll(13, values), [13]) === true).toEqual(true);
  expect(setsMatch(findAll(42, values), [42, "42"]) === true).toEqual(true);
  expect(setsMatch(findAll(NaN, values), [NaN]) === true).toEqual(true);
  expect(setsMatch(findAll(-Infinity, values), [-Infinity]) === true).toEqual(
    true
  );
  expect(setsMatch(findAll(Infinity, values), [Infinity]) === true).toEqual(
    true
  );
  expect(setsMatch(findAll("", values), [""]) === true).toEqual(true);
  expect(setsMatch(findAll("0", values), [0, "0"]) === true).toEqual(true);
  expect(setsMatch(findAll("42", values), [42, "42"]) === true).toEqual(true);
  expect(setsMatch(findAll("42hello", values), ["42hello"]) === true).toEqual(
    true
  );
  expect(setsMatch(findAll("true", values), ["true"]) === true).toEqual(true);
  expect(setsMatch(findAll(true, values), [true]) === true).toEqual(true);
  expect(setsMatch(findAll(false, values), [false]) === true).toEqual(true);
  expect(setsMatch(findAll(myObj, values), [myObj]) === true).toEqual(true);
  expect(setsMatch(findAll(null, values), [null, 0]) === false).toEqual(true);
  expect(setsMatch(findAll(undefined, values), [NaN, 0]) === false).toEqual(
    true
  );
  expect(setsMatch(findAll(0, values), [0, -0]) === false).toEqual(true);
  expect(setsMatch(findAll(42, values), [42, "42hello"]) === false).toEqual(
    true
  );
  expect(setsMatch(findAll(25, values), [25]) === false).toEqual(true);
  expect(
    setsMatch(findAll(Infinity, values), [Infinity, -Infinity]) === false
  ).toEqual(true);
  expect(setsMatch(findAll("", values), ["", 0]) === false).toEqual(true);
  expect(setsMatch(findAll("false", values), [false]) === false).toEqual(true);
  expect(setsMatch(findAll(true, values), [true, "true"]) === false).toEqual(
    true
  );
  expect(setsMatch(findAll(true, values), [true, 1]) === false).toEqual(true);
  expect(setsMatch(findAll(false, values), [false, 0]) === false).toEqual(true);
});

// ***************************

function setsMatch(arr1, arr2) {
  if (
    Array.isArray(arr1) &&
    Array.isArray(arr2) &&
    arr1.length == arr2.length
  ) {
    for (let v of arr1) {
      if (!arr2.includes(v)) return false;
    }
    return true;
  }
  return false;
}
