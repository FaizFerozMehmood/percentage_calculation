


var addBtn = document.getElementById('Add')


var heading = document.querySelector('.headings')
addBtn.addEventListener("click", function () {


  var input_for_eng = document.getElementById("input_for_eng")
  var table_items = document.getElementById('table_items')
  var input_for_math = document.getElementById('input_for_math')
  var input_for_science = document.getElementById('input_for_science')
  var input_for_chemistry = document.getElementById('input_for_chemistry')
  var input_for_bio = document.getElementById('input_for_bio')


  heading.className = "hello"
  table_items.innerHTML += `<tr>
     <td>${input_for_eng.value}</td>
     <td>${input_for_math.value}</td>
     <td>${input_for_science.value}</td>
     <td>${input_for_chemistry.value}</td>  
     <td>${input_for_bio.value}</td>
     </tr>`

  var total = Number(input_for_eng.value) + Number(input_for_math.value) + Number(input_for_science.value) + Number(input_for_chemistry.value) + Number(input_for_bio.value)
  console.log("total", total);
  if (input_for_eng.value > 100 || input_for_math.value > 100 || input_for_science.value > 100 || input_for_chemistry.value > 100 || input_for_bio.value > 100) return alert("Number must be less than 100 or equal")

  var percent = total / 500 * 100
  console.log("percent", percent);
  if (input_for_eng.value < 40 && input_for_math.value < 40 && input_for_science.value < 40 && input_for_chemistry.value < 40 || input_for_bio.value < 40) {
    var percentage = document.getElementById('percentage')
    percentage.innerHTML = `
  <h3>Percentage : ${percent}%</h3>
  <h3>Obtained Marks : ${total}</h3>
  <h3>Status : <span class ="Fail">Fail</span></h3>`
    // percentage.innerHTML = `<h3>Percentage : ${percent}%</h3>
    // <h3>Obtained Marks : ${total}</h3>`
  } else {
    // alert("congrats")
    var percentage = document.getElementById('percentage')

    percentage.innerHTML += `<h3>Percentage : ${percent}%</h3>
  <h3>Obtained Marks : ${total}</h3>
  <h3>Status :<span class ="pass">Pass</span></h3>`
  }

  // percentage.innerHTML += `<h3>Status : fail</h3>`






  console.log("fail");


  input_for_eng.value = ""
  input_for_math.value = ""
  input_for_chemistry.value = ""
  input_for_science.value = ""
  input_for_bio.value = ""


})

