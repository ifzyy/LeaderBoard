const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameId = 'bYDzcXr8KBIKsi97Jb3j';
const updateScoreUrl = `${url}games/${gameId}/scores/`;
const listContainer = document.querySelector('.score-container');

const displayData = (results) => {
  results.forEach((player) => {
    listContainer.innerHTML += `<li>${player.user}: ${player.score}</li>`;
  });
};

// get updated scores from API
const getData = async () => {
  await fetch(updateScoreUrl)
    .then((response) => response.json())
    .then((json) => displayData(json.result));
};

export default getData;
