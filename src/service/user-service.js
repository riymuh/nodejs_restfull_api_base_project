import { validate } from "../validation/validation.js";
import {
  registerUserValidation,
  loginUserValidation,
  getUserValidation,
} from "../validation/user-validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { logger } from "../application/logging.js";

const register = async (request) => {
  const user = validate(registerUserValidation, request);

  const countUser = await prismaClient.user.count({
    where: {
      username: user.username,
    },
  });

  if (countUser === 1) {
    throw new ResponseError(400, "Username already exists");
  }

  user.password = await bcrypt.hash(user.password, 10);

  return prismaClient.user.create({
    data: user,
    select: {
      username: true,
      name: true,
    },
  });
};

const login = async (request) => {
  const loginRequest = validate(loginUserValidation, request);

  const user = await prismaClient.user.findFirst({
    where: {
      username: loginRequest.username,
    },
    select: {
      id: true,
      username: true,
      password: true,
    },
  });

  if (!user) {
    throw new ResponseError(401, "Username or password wrong");
  }

  const isPasswordValid = await bcrypt.compare(
    loginRequest.password,
    user.password
  );
  if (!isPasswordValid) {
    throw new ResponseError(401, "Username or password wrong");
  }

  const token = uuid().toString();
  const updateUser = await prismaClient.user.update({
    where: {
      id: user.id,
    },
    data: {
      token: token,
    },
    select: {
      token: true,
    },
  });

  return updateUser;
};

const get = async (username) => {
  const getUsername = validate(getUserValidation, username);
  //const getUsername = username;

  const user = await prismaClient.user.findFirst({
    where: {
      username: getUsername,
    },
    select: {
      username: true,
      name: true,
      token: true,
    },
  });

  if (!user) {
    throw new ResponseError(404, "user is not found");
  }

  return user;
};

export default { register, login, get };
