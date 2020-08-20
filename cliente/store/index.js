import Cookie from 'js-cookie'

export const state=()=>({
    prestamos:[],
    usuario:null,
    token:null
})

export const mutations={
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
    }
}