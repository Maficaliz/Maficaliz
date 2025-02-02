import User from "../core/classes/user";

const useUser = (name: string = '') => {
    return new User(name);
}

export default useUser;