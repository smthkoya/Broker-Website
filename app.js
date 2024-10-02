const userName = document.getElementById("username");
const userSurname = document.getElementById("userSurname");
const userSalary = document.getElementById("userSalary");
const loadBtn = document.getElementById("loadBtn");
const addBtn = document.getElementById("addBtn");
const tbody = document.getElementById("tbody");
const addEmployee = document.querySelector(".employeeList");
const newUserArr = [];

const clearAllInputs = function () {
  userName.value = "";
  userSurname.value = "";
  userSalary.value = "";
};

const addEmployeeToTheList = function ({ name, surname }) {
  let employeeLi = "";
  employeeLi += `<div class="item">
              <input type="checkbox" class="check" data-index="${
                newUserArr.length - 1
              }"/> 
              <label>${name} ${surname}</label>
            </div>`;
  addEmployee.insertAdjacentHTML("beforeend", employeeLi);
};

const addNewUser = function () {
  if (
    userName.value == "" ||
    userSurname.value == "" ||
    userSalary.value == ""
  ) {
    alert("Please enter data");
    return;
  }
  const newUser = {
    name: userName.value,
    surname: userSurname.value,
    salary: userSalary.value,
  };

  newUserArr.push(newUser);
  addEmployeeToTheList(newUser);

  clearAllInputs();
};
const clearTable = function () {
  tbody.innerHTML = "";
};

const addUserToTheTable = function () {
  clearTable();
  const checkedBoxes = document.querySelectorAll(".check:checked");
  checkedBoxes.forEach((box) => {
    const userIndex = box.getAttribute("data-index");
    const user = newUserArr[userIndex];

    let tbodyUser = "";
    tbodyUser += `<tr>
                <td>${user.name}</td>
                <td>${user.surname}</td>
                <td>${user.salary}</td>
              </tr>`;
    tbody.insertAdjacentHTML("afterbegin", tbodyUser);
  });
};
addBtn.addEventListener("click", addNewUser);
loadBtn.addEventListener("click", addUserToTheTable);
