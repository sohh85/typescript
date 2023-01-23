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
        console.log(guest);
    });
}
// 外部ファイルのデータを取得
var guestsJson = fs.readFileSync("data.json");
// const guests: Guest[] = JSON.parse(guestsJson.toString());
var guests = [{
        age: 22,
        name: "String",
        height: 176
    }];
callGuest(guests);
