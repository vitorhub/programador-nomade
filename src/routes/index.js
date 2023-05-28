import { Router } from 'express'

const routes = new Router(); // instancia router() permite usar o get para chamar a rota

routes.get("/", (req, res)=>{
    res.status(200).json({
        ok: "connected"
    })
})

export default routes;