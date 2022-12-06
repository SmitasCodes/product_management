import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1zT5Gz9rZs45r_sx5IpnmLuiSYuBZwzc",
  authDomain: "product-management-8488b.firebaseapp.com",
  databaseURL: "https://product-management-8488b-default-rtdb.firebaseio.com",
  projectId: "product-management-8488b",
  storageBucket: "product-management-8488b.appspot.com",
  messagingSenderId: "211904639327",
  appId: "1:211904639327:web:31b33f622189f3380186ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import {
  getDatabase,
  ref,
  get,
  set,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

const db = getDatabase();

// INPUT TAGS
const number = document.querySelector("#enterID");
const name = document.querySelector("#enterName");
const quantity = document.querySelector("#enterQuantity");
const findID = document.querySelector("#findID");
const enterPrice = document.querySelector("#enterPrice");
const enterDescription = document.querySelector("#enterDescription");
const enterImage = document.querySelector("#enterImage");

// INSERT UPDATE REMOVE
const insert = document.querySelector("#insert");
const updatee = document.querySelector("#update");
const removee = document.querySelector("#remove");
const findDB = document.querySelector("#find");
const findDat = document.querySelector("#findData");

// EVENT LISTENERS
insert.addEventListener("click", (a) => {
  insertData();
});

findDB.addEventListener("click", (b) => {
  findData();
});

updatee.addEventListener("click", (c) => {
  updateData();
});

removee.addEventListener("click", (c) => {
  removeDate();
});

// WORKING WITH DATA
function insertData() {
  event.preventDefault();
  if (
    number.value.length == 0 ||
    name.value.length == 0 ||
    quantity.value.length == 0
  ) {
    alert("Data required!");
    return;
  } else {
    set(ref(db, "Products/" + number.value), {
      Name: name.value,
      ID: number.value,
      Quantity: quantity.value,
      Price: enterPrice.value,
      Description: enterDescription.value,
      Image: enterImage.value,
    })
      .then(() => {
        alert("Data added succesfully");
      })
      .catch((error) => {
        alert(error);
      });
  }
}

// GET DATA
function findData() {
  event.preventDefault();
  if (findDat.value == "") {
    alert("Data required!");
    return;
  } else {
    const dbref = ref(db);

    get(child(dbref, "Products/" + number.value))
      .then((snapshot) => {
        if (snapshot.exists()) {
          //   console.log(snapshot.val().Name);
          //   let tr1 = document.createElement("tr");
          //   let tr2 = document.createElement("tr");
          //   findDat.appendChild(tr1);
          //   findDat.appendChild(tr2);
          //   let arr = [
          //     "Name",
          //     "ID",
          //     "Quantity",
          //     "Price",
          //     "Description",
          //     "Image",
          //     snapshot.val().Name,
          //     snapshot.val().ID,
          //     snapshot.val().Quantity,
          //     snapshot.val().Price,
          //     snapshot.val().Description,
          //     snapshot.val().Image,
          //   ];
          //   for (let key in arr) {
          //     let td = document.createElement("td");
          //     td.innerText = arr[key];
          //     if (key <= 5) {
          //       tr1.appendChild(td);
          //     } else {
          //       tr2.appendChild(td);
          //       if (key == 11) {
          //         td.innerText = "";
          //         let img = document.createElement("img");
          //         img.src = arr[key];
          //         img.style.cssText = "width: 50px; height: auto;";
          //         td.appendChild(img);
          //       }
          //     }
          //   }
        } else {
          alert("No data found");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
}

// UPDATE DATE
function updateData() {
  event.preventDefault();
  if (
    name.value.length == 0 ||
    quantity.value.length == 0 ||
    number.value.length == 0
  ) {
    alert("Data required!");
    return;
  } else {
    update(ref(db, "Products/" + number.value), {
      Name: name.value,
      Quantity: quantity.value,
    })
      .then(() => {
        alert("Data updated successafully");
      })
      .catch((error) => {
        alert(error);
      });
  }
}

// DELETE DATE
function removeDate() {
  if (number.value.length == 0) {
    alert("Data required!");
    return;
  } else {
    event.preventDefault();
    remove(ref(db, "Products/" + number.value))
      .then(() => {
        alert("Data deleted succesfully");
      })
      .catch((error) => {
        alert(error);
      });
  }
}

// Task
// Create a table which contains returned data
// Use insert set and get

//   let listItem = document.createElement("li");
//   listItem.classList.add(
//     "list-group-item",
//     "list-group-item-secondary"
//   );
//   listItem.textContent = "Product Name: " + snapshot.val().Name;
//   findDat.appendChild(listItem);
//   let listItemSecond = document.createElement("li");
//   listItemSecond.classList.add(
//     "list-group-item",
//     "list-group-item-light"
//   );
//   listItemSecond.textContent =
//     "Product Quantity: " + snapshot.val().Quantity;
//   findDat.appendChild(listItemSecond);
