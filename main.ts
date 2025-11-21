/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2025-11-20
 * @fileoverview this program provides 4 lines of text to input whatever the user wants.
 */

let line1: string;
let line2: string;
let line3: string;
let line4: string;

String(prompt("Can you give me four lines of text?"));
line1 = String(prompt("Line1: "));
line2 = String(prompt("Line2: "));
line3 = String(prompt("Line3: "));
line4 = String(prompt("Line4: "));

console.log(line4 + line3 + line2 + line1)

console.log("\nDone");