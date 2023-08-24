import {Router} from 'express'
import {get_programas, get_productos, get_actividades, get_metas} from '../controladores/ctrl_api.js'
const router=Router()


router.get('/programas',get_programas);
router.get('/productos/:prg',get_productos);
router.get('/actividades/:prg/:prd',get_actividades);
router.get('/metas/:prg',get_metas);
export default router