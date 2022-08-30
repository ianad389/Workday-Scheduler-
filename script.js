const currentDay = moment().format('MMMM Do YYYY, h:mm');
const container = $(".container")

$("#currentDay").text(currentDay)

for (let i = 8; i < 18; i++) {
    let storageText = '';
    let localStorageKey = 'hour-' + i;
    console.log(localStorageKey);
    console.log(localStorage.getItem(localStorageKey));
    if (localStorage.getItem(localStorageKey)) {
     storageText = localStorage.getItem(localStorageKey)
    }
    if (i < 13) {
        container.append(`
        <div id="hour-${i}" class="row time-block"> <div class="col-md-1 hour">
        ${i}AM
      </div>
      <textarea class="col-md-10 description">${storageText}
      </textarea>
      <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
    </div>
        `)

    }
    else {
        container.append(`
    <div id="hour-${i}" class="row time-block"> <div class="col-md-1 hour">
    ${i - 12}PM
  </div>
  <textarea class="col-md-10 description">${storageText}
  </textarea>
  <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
</div>
    `)

    }
}

const saveBtn = $(".saveBtn")

$('.saveBtn').on('click', function () {
    // get nearby values
    var value = $(this)
        .siblings('.description')
        .val();
    var time = $(this)
        .parent()
        .attr('id');

    // save in localStorage
    localStorage.setItem(time, value);
});
