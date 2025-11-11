import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();
const router = Router();

interface User {
  username: string;
  passwordHash: string;
}

// Usuário fixo em memória
const defaultUser: User = {
  username: "admin",
  passwordHash: bcrypt.hashSync("1234", 10),
};

router.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (username !== defaultUser.username) {
    return res.status(400).json({ error: "Usuário não encontrado" });
  }

  const valid = await bcrypt.compare(password, defaultUser.passwordHash);
  if (!valid) {
    return res.status(400).json({ error: "Senha incorreta" });
  }

  const token = jwt.sign(
    { username: defaultUser.username },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" }
  );

  return res.json({ message: "Login realizado com sucesso", token });
});

export default router;
