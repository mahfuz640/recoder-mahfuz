import axios from "axios";

export const compiler = axios.create({
  baseURL: "https://judge0-ce.p.rapidapi.com/",
  headers: {
    "content-type": "application/json",
    "Content-Type": "application/json",
    "X-RapidAPI-Key": "f34dd48e62msh57c6caf4388c94cp175443jsn3cb23a76fd8e",
    "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
  },
});
