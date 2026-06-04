import { Router } from "express";
import { userRouter } from "../module/user/user.router.js";

const router = Router();

const moduleRouters = [
    {
        path:'/users',
        router: userRouter
    }
]

moduleRouters.forEach(({ path, router: moduleRouter }) => {
    router.use(path, moduleRouter);
})

export default router;