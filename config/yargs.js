console.log(require('yargs').argv);

const argv=require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'base de la multiplicación',
            })
            .option('l',{
                alias: 'listar',
                default:false,
                type: 'boolean',
                describe: 'muestra la tabla en consola',
            })
            .option( 'h',{
                alias: 'hasta',
                type: 'number',
                default:10,
                describe: 'hasta que valor se multiplica',
            })
            .check((argv,options)=>{
                if(isNaN(argv.b)){
                    throw `La base tiene que ser un numero`;
                }
                if(isNaN(argv.h)){
                    throw `El limite tiene que ser un numero`;
                }
                return true;

            })
            .argv;


console.log(argv);

module.exports=argv;