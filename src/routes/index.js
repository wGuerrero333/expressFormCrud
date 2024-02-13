import { Router } from "express"

const router = Router()
// pg es un modulo para conectarse a PostgreSQL
import pg from 'pg'

const conexionRender = new pg.Pool({
    // Esta conexion con la db fuciona para localhost 5432 al parecer no detecta la variable de entorno en .ENV
    connectionString: "postgres://djangocruddb_yf1v_user:a17MmMBm9HYf8PPpE5OXEBlsV3hvgYCt@dpg-cm6ravud3nmc73ar9nq0-a.oregon-postgres.render.com/djangocruddb_yf1v",
    
    // ssl solo necesario en DEVELOPMENT
    ssl: true
})

router.get('/respuestaRender', async (req, res) => {
    const resultado = await conexionRender.query('SELECT * FROM  renderDefault')
    return res.json(resultado.rows)
})

router.get('/', (req,res)=> {
    res.render('home.ejs')
})

router.get('/list', (req,res)=> {
    res.render('listado')
})

router.get('/reg', (req,res)=> {
    res.render('registrarse')
})
export default router
