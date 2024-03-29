import Cookie from 'js-cookie'

export const state=()=>({
    cart:[],    
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
        prestamosActivos:0        
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
    clearCart(state) {
        state.cart=[];
        state.cuenta.enCanasta=0;
    },
    clearCuenta(state){
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
        if (data.enProceso) state.cuenta.enProceso=data.enProceso;
        if (data.recompensasDoopla) state.cuenta.recompensasDoopla=data.recompensasDoopla;
        if (data.InversionesNetas) state.cuenta.InversionesNetas=data.InversionesNetas;
    },    
    setToken(state,data) {
        state.token=data.token
        state.usuario=data.usuario
    },
    setCart(state,data){
        state.cart=data.cart
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
    async confirmaInversion(vuexContext){
        try {
            let res= await this.$axios.$post('api/inversion',{inversiones:vuexContext.state.cart})                
            if (res.exito){
                    vuexContext.commit("clearCart")                    
                    Cookie.remove('cart')
                    vuexContext.dispatch("loadCuenta")
                return true
            }
        } catch (error) {
            console.log(error.message)
            return false
        }
        
    },
    removeInversion(vuexContext,inversion){
        vuexContext.commit("removeInversion",inversion)
        Cookie.set('cart',vuexContext.state.cart,{ expires: 1})
    },
    addInversionToCart(vuexContext,datos){        
        const cartSolicitud=vuexContext.state.cart.find(inversion => inversion._id===datos.solicitud._id )
        if (!cartSolicitud) {
            vuexContext.commit("pushToCart",datos)
        } else {
            vuexContext.commit("incrementaMonto",{inversion:cartSolicitud,montoAdicional:datos.montoInversion})   
        }    
        vuexContext.commit("incEnCanasta");
        Cookie.set('cart',vuexContext.state.cart,{ expires: 1 })

    },
    async nuxtServerInit(vuexContext,context){        
        
        vuexContext.dispatch("checkCookies",context.req)        
        if (vuexContext.state.token) await vuexContext.dispatch('loadCuenta')        
        
    },
    async loadCuenta(vuexContext){
        let getDepositos=this.$axios.$get("/api/Totdepositos")
        let getInversiones=this.$axios.$get("/api/TotInvNetas")
        let getRecompensas=this.$axios.$get("/api/TotRecompensas")
        const [depositosResp,InversionesResp,recompensasResp] =await Promise.all([
            getDepositos,
            getInversiones,
            getRecompensas
        ])
        let data={};
        if (depositosResp.exito) 
            data.depositos=depositosResp.totDepositos;        
        if (InversionesResp.exito){
            data.enProceso=InversionesResp.totInvesionesProceso;
            data.InversionesNetas=InversionesResp.totInversionesNetas;
        }            
        if (recompensasResp.exito)
            data.recompensasDoopla=recompensasResp.totRecompensas
        
        vuexContext.commit('setCuenta',data)
        
    },
    checkCookies(vuexContext,req){
        let token;
        let usuario;
        let cookie;
        let jsonCart;
        let cart;
        process.client ? cookie=document.cookie : cookie=req.headers.cookie
        if (!cookie) {
            vuexContext.commit('clearToken')
            vuexContext.commit('clearCart') 
            vuexContext.commit('clearCuenta') 
            delete this.$axios.defaults.headers.common['x-access-token']
            return; 
        }  
        let jwtToken=cookie.split(";").find(c=>c.trim().startsWith('jwt='))
        if (jwtToken){
            token=jwtToken.split('=')[1]
            usuario=JSON.parse(unescape(cookie.split(";").find(c=>c.trim().startsWith('usuario=')).split('=')[1]))
            jsonCart=cookie.split(";").find(c=>c.trim().startsWith('cart='))
            if (jsonCart) {
                cart=JSON.parse(unescape(jsonCart.split('=')[1]))
            }
        }

        if (token && usuario) {
            vuexContext.commit('setToken',{ usuario:usuario, token:token})
            this.$axios.defaults.headers.common['x-access-token']=token                
            if (cart) {
                vuexContext.commit('setCart',{cart:cart})
                vuexContext.commit('incEnCanasta')
            }
        } else {
            vuexContext.commit('clearToken')
            vuexContext.commit('clearCart') 
            vuexContext.commit('clearCuenta') 
            delete this.$axios.defaults.headers.common['x-access-token']
        }
    },
    deslogeaUsuario(vuexContext){
        vuexContext.commit("clearToken");
        Cookie.remove('jwt')
        Cookie.remove('usuario')
        Cookie.remove('cart')
        vuexContext.commit("clearCuenta");
        vuexContext.commit("clearCart");
        
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
        return state.cuenta.depositos+state.cuenta.pagosAcreditados+state.cuenta.recompensasDoopla-state.cuenta.InversionesNetas-state.cuenta.enProceso-state.cuenta.enCanasta-state.cuenta.retiros                    
    },
    getValorCnt(state){
        let efectivo=state.cuenta.depositos+state.cuenta.pagosAcreditados+state.cuenta.recompensasDoopla-state.cuenta.InversionesNetas-state.cuenta.enProceso-state.cuenta.enCanasta-state.cuenta.retiros;
        return efectivo+state.cuenta.enProceso+state.cuenta.prestamosActivos 
    }

}