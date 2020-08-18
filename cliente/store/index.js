import Cookie from 'js-cookie'

export const state=()=>({
    prestamos:[],
    token:null
})

export const mutations={
    setToken(state,token) {
        state.token=token
    },
    clearToken(state) {
        state.toke=null;
    }
}

export const actions={
    deslogeaUsuario(vuexContext){
        vuexContext.commit("clearToken");
        //Cookie.remove('jwt')
        if (process.client) {
            localStorage.removeItem('token')
        }
    },

    async logeaUsuario(vuexContext,data){
        try {
            let respuesta=await this.$axios.$post("http://localhost:3001/api/login",data)
            console.log(respuesta)
            if (respuesta.exito){
                vuexContext.commit('setToken',respuesta.token)
                localStorage.setItem('token',response.data.token)
                //Cookie.set('jwt',response.data.idToken)
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const getters={
    logeado(state){
        return state.token!=null
    }
}