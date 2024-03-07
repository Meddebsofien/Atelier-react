import { useState } from "react";
import API from "../config/axiosconfig";

export const get = (id) => {
  id = id || "";
  return API.get(`events/${id}`);
};

export const add = (body) => {
  return API.post(`events`, body);
};

export const update = (id, body) => {
  return API.put(`events/${id}`, body);
};

export const supprime = (id) => {
  return API.delete(`events/${id}`);
};
