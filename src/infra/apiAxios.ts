import axios from "axios";
import { API_URL } from "@/config/env";

const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;

export const apiAxios = axios.create({
  baseURL: API_URL,
  timeout: ONE_MINUTE,
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken",
  withCredentials: true,
});


// Adiciona um interceptador na requisição
apiAxios.interceptors.request.use(async function (config) {
  const response: any = await axios.get(API_URL + "/api/csrftoken")
  const csrftoken = response.data.csrf;

  config.headers["Cookie"] = "csrftoken=" + csrftoken;


  console.log(config);

  return config;
}, function (error) {
  // Faz alguma coisa com o erro da requisição
  return Promise.reject(error);
});

// Adiciona um interceptador na resposta
apiAxios.interceptors.response.use(function (response) {
  // console.log(response.config)
  // console.log(JSON.stringify({ "response": response.headers }))
  // Qualquer código de status que dentro do limite de 2xx faz com que está função seja acionada
  // Faz alguma coisa com os dados de resposta
  return response;
}, function (error) {
  // console.log(JSON.stringify(error))
  // Qualquer código de status que não esteja no limite do código 2xx faz com que está função seja acionada
  // Faz alguma coisa com o erro da resposta
  return Promise.reject(error);
});
