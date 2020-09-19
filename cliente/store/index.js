import Cookie from 'js-cookie'

export const state=()=>({
    cart:[],
    cartLenght:0,
    cuenta: {
        rendimiento:0,
        intGenerados:0,
        depositos:0,
        pagosAcreditados:0,
        recompensasDoopla:0,
        InversionesNetas:0,
        enProceso:0,
        enCanasta:0,
        retiros:0,
        prestamosActivos:0,
        prestamosFondeo:0
    },
    usuario:null,
    token:null
})

export const mutations={
    incEnCanasta(state){
        let monto=0
        state.cart.forEach(inversion => {
            monto+=inversion.montoInversion
        });        
        state.cuenta.enCanasta=monto;
    }, 
    pushToCart(state,inversion){
        inversion.solicitud.montoInversion=inversion.montoInversion
        state.cart.push(inversion.solicitud)
    },
    incrementaMonto(state,datos){
        let indexOfInv=state.cart.indexOf(datos.inversion)        
        datos.inversion.montoInversion+=datos.montoAdicional
        state.cart.splice(indexOfInv,1,datos.inversion)
    },
    clearState(state){
        state.cuenta= {
            rendimiento:0,
            intGenerados:0,
            depositos:0,
            pagosAcreditados:0,
            recompensasDoopla:0,
            InversionesNetas:0,
            enProceso:0,
            enCanasta:0,
            retiros:0,
            prestamosActivos:0,
            prestamosFondeo:0
        }
    },
    setCuenta(state,data){        
        if (data.depositos) state.cuenta.depositos=data.depositos;

    },
    setToken(state,data) {
        state.token=data.token
        state.usuario=data.usuario
    },
    clearToken(state) {
        state.token=null;
        state.usuario=null;
    },
    removeInversion(state,inversion){
        let idx = state.cart.findIndex(inv => inv._id===inversion._id)        
        state.cart.splice(idx,1)
        state.cuenta.enCanasta-=inversion.montoInversion;        
    }
}

export const actions={
    removeInversion(vuexContext,inversion){
        vuexContext.commit("removeInversion",inversion)
    },
    addInversionToCart(vuexContext,datos){        
        const cartSolicitud=vuexContext.state.cart.find(inversion => inversion._id===datos.solicitud._id )
        if (!cartSolicitud) {
            vuexContext.commit("pushToCart",datos)
        } else {
            vuexContext.commit("incrementaMonto",{inversion:cartSolicitud,montoAdicional:datos.montoInversion})   
        }    
        vuexContext.commit("incEnCanasta");

    },
    async nuxtServerInit(vuexContext,context){        
        vuexContext.dispatch("checkCookies",context.req)        
        if (vuexContext.state.token) await vuexContext.dispatch('loadCuenta')        
        
    },
    async loadCuenta(vuexContext){
        let getDepositos=this.$axios.$get("/api/Totdepositos")
        const [depositosResp] =await Promise.all([
            getDepositos
        ])
        let data={};
        if (depositosResp.exito) 
            data.depositos=depositosResp.totDepositos;
        
        vuexContext.commit('setCuenta',data)
        
    },
    checkCookies(vuexContext,req){
        let token;
        let usuario;
        let cookie;
        process.client ? cookie=document.cookie : cookie=req.headers.cookie
        if (!cookie) {
            vuexContext.commit('clearToken')
            delete this.$axios.defaults.headers.common['x-access-token']
            return; 
        }  
        
        token=cookie.split(";").find(c=>c.trim().startsWith('jwt=')).split('=')[1]
        usuario=JSON.parse(unescape(cookie.split(";").find(c=>c.trim().startsWith('usuario=')).split('=')[1]))

        if (token && usuario) {
            vuexContext.commit('setToken',{ usuario:usuario, token:token})
            this.$axios.defaults.headers.common['x-access-token']=token
        } else {
            vuexContext.commit('clearToken')
            delete this.$axios.defaults.headers.common['x-access-token']
        }

    },
    deslogeaUsuario(vuexContext){
        vuexContext.commit("clearToken");
        Cookie.remove('jwt')
        Cookie.remove('usuario')
        vuexContext.commit("clearState");
    },
    async logeaUsuario(vuexContext,data){
        try {
            let respuesta=await this.$axios.$post("/api/login",data)            
            if (respuesta.exito){                
                Cookie.set('jwt',respuesta.token,{ expires: 1 })
                Cookie.set('usuario',respuesta.usuario,{ expires: 1 })
                vuexContext.dispatch("checkCookies",vuexContext.req)  
                vuexContext.dispatch('loadCuenta')               
                return respuesta;
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const getters={
    getEnCanasta(state){
        return state.cuenta.enCanasta
    },
    getCart(state) {
        return state.cart;
    },    
    logeado(state){
        return state.token!=null
    },
    getUsuario(state){
        return state.usuario;
    },
    getCuenta(state) {
        return state.cuenta;
    },
    getEfectivo(state){
        return state.cuenta.depositos+state.cuenta.pagosAcreditados+state.cuenta.recompensasDoopla+state.cuenta.InversionesNetas-state.cuenta.enProceso-state.cuenta.enCanasta-state.cuenta.retiros                    
    },
    getValorCnt(state){
        return state.cuenta.prestamosFondeo+state.cuenta.prestamosActivos + state.cuenta.depositos+state.cuenta.pagosAcreditados+state.cuenta.recompensasDoopla+state.cuenta.InversionesNetas+state.cuenta.enProceso-state.cuenta.enCanasta+state.cuenta.retiros                    
    }

}