import express from "express";
import morgan from "morgan";
import user from './users.js';


const app = express();

// Middleware
app.use(morgan("dev"));


app.get("/users", (_req, res) => {
    res.json(user);
});


app.get("/users/:name", (req, res) => {
    const { name } = req.params;
    const lowercaseName = name.toLowerCase();
    const user = users.find((user) => user.name.toLowerCase() === lowercaseName);

    if (!user) {
        return res.status(404).json({
            status: "error",
            message: "Data user tidak ditemukan",
        });
    }

    res.json(user);
});

// Penanganan Routing 404
app.use((_req, res) => {
    res.status(404).json({
        status: "error",
        message: "Resource tidak ditemukan",
    });
});

// Penanganan Error
app.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).json({
        status: "error",
        message: "Terjadi kesalahan pada server",
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server berjalan di port ${port} bos`);
});
