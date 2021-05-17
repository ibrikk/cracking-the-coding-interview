const linkedList = value => {
  this.value = value;
  this.next = null;
}

const removeDuplicates = list => {
  const _set = new Set();
  let cur = list.head;
  let prev = null;

  while (cur) {
    if (_set.has(cur.value)) {
      let el = cur;
      prev.next = cur.next;
      cur = cur.next;
      el.next = null;
    } else {
      _set.add(cur.value);
      prev = cur;
      cur = cur.next;
    }
  }
  return list;
}

let list = new LinkedList();
for (let el of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
  list.append(el);
}

removeDuplicates(list);

console.log(list._toArray());