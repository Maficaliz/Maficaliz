import User from "../classes/user";

const userPort = {
    createUser: (name: string) => new User(name)
};

export default userPort;
