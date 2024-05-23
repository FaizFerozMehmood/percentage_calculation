


var addBtn = document.getElementById('Add')


var heading = document.querySelector('.headings')
addBtn.addEventListener("click", function () {

  var input_for_eng = document.getElementById("input_for_eng")
  var table_items = document.getElementById('table_items')
  var input_for_math = document.getElementById('input_for_math')
  var input_for_science = document.getElementById('input_for_science')
  var input_for_chemistry = document.getElementById('input_for_chemistry')
  var input_for_bio = document.getElementById('input_for_bio')

  // if (isNaN(input_for_eng.value) || isNaN(input_for_math.value) || isNaN(input_for_science.value) || isNaN(input_for_chemistry.value) || isNaN(input_for_bio.value)) {
  //   alert("plz enter valid number")
  // }
  heading.className = "hello"
  table_items.innerHTML += `<tr>
     <td>${input_for_eng.value}</td>
     <td>${input_for_math.value}</td>
     <td>${input_for_science.value}</td>
     <td>${input_for_chemistry.value}</td>  
     <td>${input_for_bio.value}</td>
     </tr>`

  var total = Number(input_for_eng.value) + Number(input_for_math.value) + Number(input_for_science.value) + Number(input_for_chemistry.value) + Number(input_for_bio.value)
  console.log(total);
  var percentage1 = (Number(input_for_eng.value) / total) * 100;
  var percentage2 = (Number(input_for_math.value) / total) * 100;
  var percentage3 = (Number(input_for_science.value) / total) * 100;
  var percentage4 = (Number(input_for_chemistry.value) / total) * 100;
  var percentage5 = (Number(input_for_bio.value) / total) * 100;
  console.log(percentage1, percentage2);

  var percentageResult = Math.floor(percentage1) + Math.floor(percentage2) + Math.floor(percentage3) + Math.floor(percentage4) + Math.floor(percentage5)

  var percentage = document.getElementById('percentage')
  percentage.innerHTML = `<h3>Percentage : ${percentageResult}%</h3>
  <h3>Obtained Marks : ${total}</h3>`

  input_for_eng.value = ""
  input_for_math.value = ""
  input_for_chemistry.value = ""
  input_for_science.value = ""
  input_for_bio.value = ""
})



