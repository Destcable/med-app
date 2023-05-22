function fetchAuth (request) {
    const auth = request.body 
    if (auth.user && auth.password) {
        (auth.user === "artem" && auth.password === "artem") ? console.log(true) : console.log(false)
    }  
    return null;
} 


module.exports = { fetchAuth }