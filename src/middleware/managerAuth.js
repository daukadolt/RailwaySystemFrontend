export default function agentAuth(context) {
    if(!context.store.getters.isEmployeeManager) {
        return context.router.push({path: "/emp_login", query: {message: "not authorized into /manager_account"}});
    }
    else context.next();
}