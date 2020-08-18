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
    deslogeaUsuario(vuexContext){
        vuexContext.commit("clearToken");
        Cookie.remove('jwt')
        Cookie.remove('usuario')
        if (process.client) {
            localStorage.removeItem('token')
            localStorage.removeItem('usuario')
        }
    },

    async logeaUsuario(vuexContext,data){
        try {
            let respuesta=await this.$axios.$post("http://localhost:3001/api/login",data)            
            if (respuesta.exito){
                vuexContext.commit('setToken',{ usuario:respuesta.usuario, token:respuesta.token})
                localStorage.setItem('token',respuesta.token)
                localStorage.setItem('usuario',respuesta.usuario)
                Cookie.set('jwt',respuesta.token)
                Cookie.set('usuario',respuesta.usuario)
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