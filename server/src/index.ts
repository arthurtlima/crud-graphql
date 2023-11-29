import express from 'express';
import cors from 'cors';

const main = async () => {

    const app = express();
    app.use(cors());
    app.use(express.json());

    app.listen(3001, () => {
        console.log("Server started on port 3001");
    });
}

main().catch((err) => {
    console.log(err);
});