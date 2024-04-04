// Array to store added employees
let employees = [];

// Function to add an employee
function addEmployee() {
    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const age = document.getElementById("age").value;

    // Check if all fields are filled
    if (name && profession && age) {
        // Create a new employee object with a unique ID
        const id = employees.length + 1;
        const employee = { id, name, profession, age };
        employees.push(employee);

        // Display success message
        displaySuccessMessage("Success : Employee Added!");
        
        // Render added employees
        renderEmployees();

        // Clear input fields
        document.getElementById("name").value = "";
        document.getElementById("profession").value = "";
        document.getElementById("age").value = "";
    } else {
        // Display error message
        displayErrorMessage("Error : Please Make sure All the fields are filled before adding in an employee !");
    }
}

// Function to display success message
function displaySuccessMessage(message) {
    const successMsg = document.getElementById("success-message");
    successMsg.style.display = "block";  
    successMsg.textContent = message;

    // Hide error message if visible
    document.getElementById("error-message").style.display = "none";
}

// Function to display error message
function displayErrorMessage(message) {
    const errorMsg = document.getElementById("error-message");
    errorMsg.style.display = "block";
    errorMsg.textContent = message;

    // Hide success message if visible
    document.getElementById("success-message").style.display = "none";
}

// Function to render added employees
function renderEmployees() {
    const addedEmployees = document.getElementById("added-employees");
    addedEmployees.innerHTML = ""; // Clear previous content

    employees.forEach(employee => {
        const employeeDiv = document.createElement("div");
        employeeDiv.classList.add("employee");

        employeeDiv.innerHTML = `
            <div class="employee-info">
                <span class="employee-item"> ${employee.id}</span>
                <span class="employee-item">Name: ${employee.name}</span>
                <span class="employee-item">Profession: ${employee.profession}</span>
                <span class="employee-item">Age: ${employee.age}</span>
            </div>
        `;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", () => deleteEmployee(employee.id));
        employeeDiv.appendChild(deleteButton);

        addedEmployees.appendChild(employeeDiv);
    });
}

// Function to delete an employee
function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    renderEmployees();
}

// Hide error and success messages initially
document.getElementById("error-message").style.display = "none";
document.getElementById("success-message").style.display = "none";
