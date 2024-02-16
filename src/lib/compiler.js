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

export const createSubmission = async (code, language, stdIn) => {
  const { data: res } = await compiler({
    method: "POST",
    url: "/submissions",
    data: {
      language_id: language,
      source_code: code,
      stdin: stdIn,
    },
  });

  return res;
};

export const getSubmission = async (token) => {
  const { data } = await compiler(`/submissions/${token}`);
  if (data.status.id === 2) {
    return await getSubmission(token);
  }

  return data;
};
