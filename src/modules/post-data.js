const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/'
const gameId = 'bYDzcXr8KBIKsi97Jb3j'
const updateScoreUrl = `${url}games/${gameId}/scores/`;

const postData = async (player, score) => {
  await fetch(updateScoreUrl, {
    method: 'POST',
    body: JSON.stringify({
      user: player,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
};

export default postData;