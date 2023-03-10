
const dolgozoTorzs = document.querySelector("#dolgozoTorzs");
const nameInput = document.querySelector("#name");
const cityInput = document.querySelector("#city");
const salaryInput = document.querySelector("#salary");
const addButton = document.querySelector("#addButton");

const dolgozoLista = [
    { id: 1, name: "Pali", city: "Szolnok", salary: 385 },
    { id: 2,name: "Kait", city: "Szolnok", salary: 320 },
    { id: 3,name: "Mari", city: "Szeged", salary: 395 },
    { id: 4,name: "Dani", city: "Szeged", salary: 401 },
    { id: 5,name: "Atti", city: "Miskolc", salary: 372 },
    { id: 6,name: "Pisti", city: "Szolnok", salary: 357 },
    { id: 7,name: "Géza", city: "Pécs", salary: 325 }
];

function loadEmployees() {
    dolgozoLista.forEach((dolgozo) => {
        let tr = document.createElement('tr');

        let tdName = document.createElement('td');
        let tdCity = document.createElement('td');
        let tdSalary = document.createElement('td');
        tdName.textContent = dolgozo.name;
        tdCity.textContent = dolgozo.city;
        tdSalary.textContent = dolgozo.salary;
        dolgozoTorzs.append(tr);

        tr.append(tdName);
        tr.append(tdCity);
        tr.append(tdSalary);
        tr.append(generateDeletebutton(dolgozo.id));
        tr.append(generateModifiebutton(dolgozo));
       
    });
}

loadEmployees();


function generateDeletebutton(id){
    let tdDelete = document.createElement('td');
    let button = document.createElement('button');
    button.textContent = "Törlés";
    button.classList ="btn btn-primary";
    handleDeleteEvent(button, id);
    tdDelete.append(button);
    return tdDelete;    
}

function handleDeleteEvent(button, id){
    button.addEventListener('click', () => {
        
        let delIndex = 0;
        dolgozoLista.forEach((dolgozo, index)=>{
            if(dolgozo.id == id){
                delIndex = index; 
            }

        });
        dolgozoLista.splice(delIndex, 1);
        dolgozoTorzs.textContent = "";
        loadEmployees();
    }
    );
}
addButton.addEventListener('click', () => {
    addEmployee();
});

function generateModifiebutton(dolgozo){
    let tdModifie = document.createElement('td');
    let button = document.createElement('button');
    button.textContent = "Módosítás";
    button.classList ="btn btn-primary";
    handleModifieEvent(button, dolgozo);
    tdModifie.append(button);
    return tdModifie;    
}

function handleModifieEvent(button, dolgozo){
    button.addEventListener('click', () => {
        
    }
    );
}
function addEmployee() {
    dolgozo = {
        name: nameInput.value,
        city: cityInput.value,
        salary: salaryInput.value
    };
    dolgozoLista.push(dolgozo);
    clearFields();
    dolgozoTorzs.textContent = "";
    loadEmployees();
}

function clearFields() {
    nameInput.value = "";
    cityInput.value = "";
    salaryInput.value = "";
}