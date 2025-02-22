import userPort from "../core/ports/userPort";

class UserMiddleware {
  createUser(name: string) {
    return userPort.createUser(name);
  }
}

export default UserMiddleware;