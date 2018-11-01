/*
The problem I was having with this API is that the JSON file would only give me back an array of 20 items of their 493. The arrays were parted by pages, so I looped through the page query parameter for all 25 pages that held all 493 elements.

*/
let count = 0

function fetchChar() {
  for (let i = 1; i <= 25; i++) {
    fetch(`https://rickandmortyapi.com/api/character/?page=${i}`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        // console.log(response.results[0].name)
        for(let j = 0; j < response.results.length; j++){
            locationList.push(response.results[j].location.name)
            let uniqueArray = new Set(locationList);
            console.log(uniqueArray)
        }



      })
      .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
      });
  }
}

function fetchLoc() {
  for (let i = 1; i <= 18; i++) {
    fetch(`https://rickandmortyapi.com/api/location`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        // console.log(response.results[0].name)

        let locationList = []
        for(let j = 0; j < response.results.length; j++){
            locationList.push(response.results[j].name)
            let uniqueArray = new Set(locationList);
            console.log(uniqueArray)
        }

      })
      .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
      });
  }
}
