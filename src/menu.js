// pestaña con el menu


function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
  
    menu.appendChild(
      createMenuItem(
        "classico cheese",
        "mozzarella, tomato sauce",
        "$10"
      )
    );
    menu.appendChild(
      createMenuItem(
        "mushroom & sweet onion",
        "mozzarella, tomato sauce, mushroom, onion",
        "$11"
      )
    );
    menu.appendChild(
      createMenuItem(
        "margherita",
        "crushed tomatoes, fresh mozzarella, basil",
        "$11"
      )
    );
    menu.appendChild(
      createMenuItem(
        "house-made fennel sausage",
        "mozzarella, tomato sauce, fennel sausage",
        "$13"
      )
    );
    menu.appendChild(
      createMenuItem(
        "charred pepperoni",
        "mozzarella, tomato sauce, pepperoni",
        "$13"
      )
    );
    menu.appendChild(
      createMenuItem(
        "heirloom tomato",
        "local heiloom tomatoes, piave vecchio, fresh mozarella, fennel pollen, evoo",
        "$14"
      )
    );
  
    return menu;
  }
  
  function createMenuItem(name, description, price) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    const foodPrice = document.createElement("p");
    foodPrice.textContent = price;
  
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
    menuItem.appendChild(foodPrice);
  
    return menuItem;
  }
  
  function displayMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
  }
  
  export default displayMenu;
