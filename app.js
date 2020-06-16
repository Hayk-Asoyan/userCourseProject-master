import { getUsers } from "./api/api.js";
import { createUserInfoElem, userInputListener} from "./utils/helpers.js";
const rootElem = document.getElementById("root");
const usersContainer = document.createElement("div");
const header = document.createElement("header");
const searchInput = document.createElement("input");

header.setAttribute("id", "header");
searchInput.setAttribute("id", "searchInput");

header.append(searchInput);
rootElem.append(header);

usersContainer.setAttribute("id", "usersContainer");

async function users() {
  try {
    const data = await getUsers(10);

    userInputListener(data)

    data.results.forEach(function (userData) {
      createUserInfoElem(userData, usersContainer);
    });
  } catch (error) {
    console.log(error);
  }
}

users();


rootElem.append(usersContainer);

