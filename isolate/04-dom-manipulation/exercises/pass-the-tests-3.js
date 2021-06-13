'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <table>
    <tbody>
      <tr>
      </tr>
      <tr>
      </tr>
    </tbody>
  </table>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---

const tableEl = divEl.children[0];
const tbodyEl = tableEl.children[0];
const trEl1 = tbodyEl.children[0];
const trEl2 = tbodyEl.children[1];

const tdEl1 = document.createElement('td');
tdEl1.innerHTML = "a";
trEl1.appendChild(tdEl1);

const tdEl2 = document.createElement('td');
tdEl2.innerHTML = "b";
trEl1.appendChild(tdEl2);

const tdEl3 = document.createElement('td');
tdEl3.innerHTML = "c";
trEl2.appendChild(tdEl3);

const tdEl4 = document.createElement('td');
tdEl4.innerHTML = "d";
trEl2.appendChild(tdEl4);

// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

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
