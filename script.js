function add(){
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let age = document.getElementById('age').value
    let profession = document.getElementById('profession').value
    if (fname == '' || lname =='' || age =='' || profession==''){
      alert("All fields are required!");
    return;
  }    else if (age > 110) {
        alert("You're too old for this!! Try your grandchildren ages.");
        return;
      }

    ;


    document.getElementById('fname').value = ''
    document.getElementById('lname').value= ''
    document.getElementById('age').value= ''
    document.getElementById('profession').value= ''


    let result = document.getElementById('result')

    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    let td4 = document.createElement('td')

    tr.className = 'item'
    td1.className= 'column1'
    td2.className='column2'
    td3.className='column3'
    td4.className='column4'

    td1.innerHTML = fname
    td2.innerHTML = lname
    td3.innerHTML = age
    td4.innerHTML = profession

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)

    result.appendChild(tr)

}
