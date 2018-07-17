function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let rankedList = document.querySelectorAll('.ranked-list li')
  for(let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n
  }
}

function deepestChild() {
// use breath-first-search algorithm and return 'past' when 'next' is exhausted, ie 'current' is undefined. 'past' returned is the deepest child / lowest on the NodeTree

  let past = 0
  let current = document.querySelector("div#grand-node")
  let next = []

  while(current) {

    // if 'current' has children, push to end of 'next' queue
    if(current.children) {
      for(let i = 0; i < current.children.length; i++) {
        next.push(current.children[i])
      }
    }
    
    // take the first element in queue 'next'
    past = current
    current = next.shift()
  }

  return past
}