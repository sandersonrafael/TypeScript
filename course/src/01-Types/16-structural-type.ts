type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { userName: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  const { userName, password } = user;
  return userName === sentValue.userName && password === sentValue.password;
};

const dbUser = { userName: 'fulano', password: '123456' };
const sentUser = { userName: 'fulano', password: '123456' };

const loggedIn = verifyUser(dbUser, sentUser);

console.log(loggedIn);
