import {cnx} from '../db.js'
export const get_programas = async (req,res)=>{
    try{
        const [prg]=await cnx.query('select distinct(cod_programa), programa from ejec2023 order by cod_programa');
        res.json(prg);
    }catch(error){
        return res.status(500).json({mensaje:'ocurrio un error'});
    }
}

export const get_productos = async (req,res)=>{
    try{
        const [prd]=await cnx.query('select distinct(cod_producto), producto from ejec2023 where cod_programa = ? order by cod_producto',[req.params.prg]);
        res.json(prd);
    }catch(error){
        return res.status(500).json({mensaje:'ocurrio un error'});
    }
}

export const get_actividades = async (req,res)=>{
    try{
        const [prd]=await cnx.query('select distinct(cod_actividad), actividad from ejec2023 where cod_programa = ? and cod_producto = ? order by cod_actividad',[req.params.prg, req.params.prd]);
        res.json(prd);
    }catch(error){
        return res.status(500).json({mensaje:'ocurrio un error'});
    }
}

export const get_metas = async (req,res)=>{
    try{
        const [prd]=await cnx.query('select distinct(cod_meta), meta from ejec2023 where cod_programa = ? order by cod_meta',[req.params.prg]);
        res.json(prd);
    }catch(error){
        return res.status(500).json({mensaje:'ocurrio un error'});
    }
}