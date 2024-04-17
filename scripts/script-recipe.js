function addIngredient() {
    var ingredientInput = document.getElementById("recipIngredient").value; //Retrieves current value in the input field from "recipIngredient"
    var ingredientList = document.getElementById("ingredientList");
    var li = document.createElement("li"); //Creates a new HTML element <li>, which represents a list item
    li.textContent = ingredientInput; //Assigns the text content to be displayed in the <li> by placing the user's input (ingredientInput) into the list item
    ingredientList.appendChild(li); //Is a reference to <ul> where it appends the <li> into it
    document.getElementById("recipIngredient").value = ""; //Clears input field
}

function addInstruction() {
    var instructionInput = document.getElementById("recipInstruction").value;
    var instructionList = document.getElementById("instructionList");
    var li = document.createElement("li");
    li.textContent = instructionInput;
    instructionList.appendChild(li);
    document.getElementById("recipInstruction").value = "";
}

function addRecipe(event) {
    event.preventDefault();
    var recipeName = document.getElementById("recipName").value;
    var recipeType = document.getElementById("recipType").value;
    var recipeComments = document.getElementById("recipComments").value;
    var ingredients = Array.from(document.querySelectorAll("#ingredientList li")).map(li => li.textContent);
    var instructions = Array.from(document.querySelectorAll("#instructionList li")).map(li => li.textContent);
    
    // Here you can handle the submission of the form, e.g., send the data to a server
    
    // Clear the form fields and lists
    document.getElementById("recipName").value = "";
    document.getElementById("recipComments").value = "";
    document.getElementById("ingredientList").innerHTML = "";
    document.getElementById("instructionList").innerHTML = "";
    alert("Recipe submitted!");
}