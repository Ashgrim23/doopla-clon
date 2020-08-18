export default function(context){
    if (context.store.getters.logeado){
        context.redirect('/resumen-cuenta-inversionista')
    }
}