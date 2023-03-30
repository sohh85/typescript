"use strict";
/**
 * 参考動画
 * https://www.youtube.com/watch?v=FSTrSYwqhLg
 *
 * npx tsc main.ts
 * node main.js
 */
exports.__esModule = true;
var fs = require("fs");
// 配列内のデータに型定義する場合は[]をつける
// 例）let array: String[] = ["sss", "aa", 3]
function callGuest(guests) {
    guests.forEach(function (guest) {
        guest.age = guest.age + 1;
        console.log("年齢:" + guest.age);
        console.log("名前:" + guest.name);
    });
}
// 外部ファイルのデータを取得
var guestsJson = fs.readFileSync("data.json");
var guests = JSON.parse(guestsJson.toString());
callGuest(guests);
