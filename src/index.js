import { generateJoke } from "./generateJokes";
import "./style/main.scss";
import smileIcon from "./assets/smileIcon.svg";

const image = document.getElementById("smileIcon");
image.src = smileIcon;
generateJoke();

document.getElementById("btn").addEventListener("click", generateJoke);
