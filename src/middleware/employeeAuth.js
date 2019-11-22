export default function employeeAuth(context) {
    console.log("employeeAuth");
    if(!context.store.getters.isEmployeeAuthenticated) {
        return context.router.push({path: "/emp_login", query: {message: "not an employee"}});
    }
    else return context.next();
}