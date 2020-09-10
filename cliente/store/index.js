import Cookie from 'js-cookie'

export const state=()=>({
    prestamos:[],
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
    setCuenta(state,data){
        if (data.depositos) state.cuenta=data.depositos;

    },
    setToken(state,data) {
        state.token=data.token
        state.usuario=data.usuario
    },
    clearToken(state) {
        state.token=null;
        state.usuario=null;
    }
}

export const actions={
    async loadCuenta(vuexContext){
        let getDepositos=this.$axios.$get("/api/depositos")
        const [depositosResp] =await Promise.all([
            getDepositos
        ])
        vuexContext.commit('setCuenta')
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
    },
    async logeaUsuario(vuexContext,data){
        try {
            let respuesta=await this.$axios.$post("/api/login",data)            
            if (respuesta.exito){                
                Cookie.set('jwt',respuesta.token,{ expires: 1 })
                Cookie.set('usuario',respuesta.usuario,{ expires: 1 })
                vuexContext.dispatch("checkCookies",vuexContext.req)                
                return respuesta;
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const getters={
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
        return state.cuenta.depositos+state.cuenta.pagosAcreditados+state.cuenta.recompensasDoopla+state.cuenta.InversionesNetas+state.cuenta.enProceso+state.cuenta.enCanasta+state.cuenta.retiros                    
    },
    getValorCnt(state){
        return state.cuenta.prestamosFondeo+state.cuenta.prestamosActivos + state.cuenta.depositos+state.cuenta.pagosAcreditados+state.cuenta.recompensasDoopla+state.cuenta.InversionesNetas+state.cuenta.enProceso+state.cuenta.enCanasta+state.cuenta.retiros                    
    }

}