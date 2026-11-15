import test from "node:test";import assert from "node:assert/strict";import {parseHex,luminance,contrastRatio,checks} from "./app.js";
test("parses short and long hex",()=>{assert.deepEqual(parseHex("#fff"),[1,1,1]);assert.deepEqual(parseHex("000000"),[0,0,0])});
test("rejects malformed colors",()=>{assert.throws(()=>parseHex("#12xz"));assert.throws(()=>parseHex("#12345"))});
test("black and white contrast is 21:1",()=>{assert.equal(contrastRatio("#000","#fff"),21)});
test("WCAG thresholds are classified",()=>{assert.equal(checks(4.5)[0].pass,true);assert.equal(checks(4.49)[0].pass,false);assert.equal(checks(7)[1].pass,true)});
test("white luminance is one",()=>{assert.equal(luminance([1,1,1]),1)});
