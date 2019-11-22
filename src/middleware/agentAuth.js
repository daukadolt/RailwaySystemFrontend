export default function agentAuth(context) {
    console.log("agentAuth");
    if(!context.store.getters.isEmployeeAgent) {
        return context.router.push({path: "/emp_login", query: {message: "not authorized into /agent_account"}});
    }
    else context.next();
}