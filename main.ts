/**
 * 参考動画
 * https://www.youtube.com/watch?v=FSTrSYwqhLg
 *
 * npx tsc main.ts
 * node main.js
 */

import * as fs from "fs"

interface Guest{
    age: Number;
    name: String;
    height: Number;
    weight?: Number;
}

// 配列内のデータに型定義する場合は[]をつける
// 例）let array: String[] = ["sss", "aa", 3]
function callGuest(guests: Guest[]) {
    guests.forEach((guest) => {
        console.log(guest)
    })
}

// 外部ファイルのデータを取得
const guestsJson = fs.readFileSync("data.json");

// const guests: Guest[] = JSON.parse(guestsJson.toString());
const guests: Guest[] = [{
    age: 22,
    name: "String",
    height: 176
}]

callGuest(guests)




