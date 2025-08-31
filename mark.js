

function calculateAttendance(event) {
    event.preventDefault();

    const name = document.getElementById('sname').value.trim();
    const f = parseFloat(document.getElementById('f').value) || 0 ;
    const s = parseFloat(document.getElementById('s').value) || 0;
    const n = parseFloat(document.getElementById('n').value) || 0;
    const j = parseFloat(document.getElementById('j').value) || 0;
    const t = parseFloat(document.getElementById('t').value) || 0;
    const d = parseFloat(document.getElementById('d').value) || 0;

    
    const totalSubjects = 6;
    const totalMarks = f + s + n + j + t + d;
    const percentage = (totalMarks / (totalSubjects * 100)) * 100;

   
    const gpa = (percentage / 9.5).toFixed(2);

    
    document.getElementById('result').innerHTML = 
        `<strong>${name ? name : 'Student'}</strong>: Percentage = ${percentage.toFixed(2)}%, GPA = ${gpa}`;

    
    const table = document.querySelector('table');
    const newRow = table.insertRow(-1);
    newRow.insertCell(0).innerText = name ? name : 'Student';
    newRow.insertCell(1).innerText = percentage.toFixed(2) + '%';
    newRow.insertCell(2).innerText = gpa;
}

