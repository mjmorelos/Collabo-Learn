import MockUsers from '../users.json';

const authenticateMockUser = (email, password) => {
  const user = MockUsers.users.find(
    (u) => u.email === email && u.password === password
  );

  return user || null;
};

export { authenticateMockUser };