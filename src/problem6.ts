interface Profile {
    name: string;
    age: number;
    email: string;
}


const updateProfile = <T extends Profile, K extends keyof T>(obj: T, key: K, value : T[K]): T => {
    return { ...obj, [key]:value };
};


const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, "age", 26));