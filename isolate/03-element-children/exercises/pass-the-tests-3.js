'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <table>
    <tbody>
      <tr>
        <td>w</td>
        <td>x</td>
      </tr>
      <tr>
        <td>y</td>
        <td>z</td>
      </tr>
    </tbody>
  </table>
`;
console.log(divEl.nodeName, divEl.cloneNode(true));

// --- write some code ---
//  you will need to access and update each <td> element

const accTable = divEl.children[0];
const accTbody = accTable.children[0];
const accTr1 = accTbody.children[0];
const accTr2 = accTbody.children[1];

const td1 = accTr1.children[0];
td1.innerHTML = "a";

const td2 = accTr1.children[1];
td2.innerHTML = "b";

const td3 = accTr2.children[0];
td3.innerHTML = "c";

const td4 = accTr2.children[1];
td4.innerHTML = "d";

// --- --- --- --- --- ---

console.log(divEl.nodeName, divEl.cloneNode(true));

const expectedInnerHTMLs = ['a', 'b', 'c', 'd'];
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    const tbodyEL = divEl.children[0].children[0];
    const trEl = tbodyEL.children[i];
    const tdEl = trEl.children[j];
    const actual = tdEl.innerHTML;
    const expected = expectedInnerHTMLs.shift();
    console.assert(actual === expected, `expected "${expected}"`);
  }
}
