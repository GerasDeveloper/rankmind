import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import { verifyToken } from "./middleware/auth";
import { AuthRequest } from "./middleware/auth";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("API RankMind está online!");
});

app.use("/auth", authRoutes);

app.get("/dados", verifyToken, (req: AuthRequest, res) => {
  res.json({ user: req.user, message: "Acesso autorizado à rota protegida!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
