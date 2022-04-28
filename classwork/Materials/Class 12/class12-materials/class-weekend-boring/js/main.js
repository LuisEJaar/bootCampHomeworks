document.querySelector('#check').addEventListener('click', check)

function check() {

  const days = document.querySelector('#day').value

  day = days.toLowerCase();
  //Conditionals go here
  if (day === 'monday' || day === 'wednesday' || day === 'friday') {
    document.querySelector('#placeToSee').innerHTML = "Boring Day";
  } else if ( day === 'tuesday' || day === 'thursday') {
    document.querySelector('#placeToSee').innerHTML = "Class day";
  } else {
    document.querySelector('#placeToSee').innerHTML = "Weekend";
  }

}
