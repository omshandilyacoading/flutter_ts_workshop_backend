import { Router, Request, Response } from "express";

const helloRouter = Router();

helloRouter.get("/", (req: Request, res: Response) => {
    res.send({"data":"Hello, World!"});
});

export default helloRouter;
