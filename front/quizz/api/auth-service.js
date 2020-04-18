import { readFileSync } from 'fs';
import { resolve } from 'path';

import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET;

export default (req, res) => {

  const { username, password } = req.body;
  const { users } = JSON.parse(readFileSync(resolve(__dirname, 'db.json')));
  console.log({ users });

  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    const token = jwt.sign({ id: user.id }, jwtSecret);
    res.json({ userId: user.id, token });
  } else {
    res.status(403).json({ error: 'authentication failed' });
  }
};
