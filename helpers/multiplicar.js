const fs=require('fs');

const crearArchivo= async (val=5,l,h)=>{
    

    let salida="";

    for(let i=1;i<=h;i++){
        salida+=`${val}  x  ${i}  =  ${val*i} \n`;
    }

    if(l){
        console.log("================".green);
        console.log(`Tabla del ${val}`.blue);
        console.log("================".green);
        console.log(salida);
    }
    

    // fs.writeFile(`tabla-${val}.txt`,salida,(err)=>{
    //     if(err) throw err;
    //     console.log(`tabla-${val}.txt creado`);
    // });

    try {
        fs.writeFileSync(`./salida/tabla-${val}.txt`,salida);
        return `tabla-${val}.txt`
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo:crearArchivo
}