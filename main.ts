/**
 * 参考動画
 * https://www.youtube.com/watch?v=FSTrSYwqhLg
 *
 * npx tsc main.ts
 * node main.js
 */

import * as fs from "fs"

interface Guest{
    age: number;
    name: String;
    height: Number;
    weight?: Number;
}

// 配列内のデータに型定義する場合は[]をつける
// 例）let array: String[] = ["sss", "aa", 3]
function callGuest(guests: Guest[]) {
    guests.forEach((guest) => {
        guest.age = guest.age + 1

        console.log("年齢:" + guest.age)
        console.log("名前:" + guest.name)
    })
}

// 外部ファイルのデータを取得
const guestsJson = fs.readFileSync("data.json");

const guests: Guest[] = JSON.parse(guestsJson.toString());


callGuest(guests)




