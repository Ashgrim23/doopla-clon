export default function (context) {
    context.store.dispatch("checkCookies",context.req)
    
}