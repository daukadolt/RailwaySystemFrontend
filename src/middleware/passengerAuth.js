export default function passengerAuth(context) {
    if(!context.store.getters.isAuthenticated) context.next('/login?message="please, authenticate"');
    else context.next();
}