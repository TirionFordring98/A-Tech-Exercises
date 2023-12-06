
const reservations = {
  Bob: {claimed: false},
  Ted: {claimed: true}
};
function checkReservation() {
const name = document.getElementById("nameInput").value;
const resultDiv = document.getElementById("result");

if (reservations.hasOwnProperty(name)) {
if (reservations[name].claimed === false) {
  resultDiv.innerHTML = "Hmm, someone already claimed this reservation";
      } else {
          resultDiv.innerHTML = "Welcome, " + name;
      }
          } else {
              resultDiv.innerHTML = "You have no reservation";
  }
}