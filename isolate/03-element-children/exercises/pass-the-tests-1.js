"use strict";

const ulEl = document.createElement("ul");
ulEl.innerHTML = `
  <li> toad </li>
  <li>Frog</li>
  <li>salad</li>
`;
console.log(ulEl.nodeName, ulEl.cloneNode(true));

// --- write some code ---
const child0 = ulEl.children[0];
child0.innerHTML = "toad";
const child1 = ulEl.children[1];
child1.innerHTML = "frog";
const child2 = ulEl.children[2];
child2.innerHTML = "salamander";
console.log(child1.nodeName, child1.cloneNode(true));
console.log(child2.nodeName, child2.cloneNode(true));


// --- --- --- --- --- ---

console.log(ulEl.nodeName, ulEl.cloneNode(true));

const expectedInnerHTMLs = ["toad", "frog", "salamander"];
for (let i = 0; i < expectedInnerHTMLs.length; i++) {
  const actual = ulEl.children[i].innerHTML;
  const expected = expectedInnerHTMLs[i];
  console.assert(actual === expected, `Test child ${i}`);
}
