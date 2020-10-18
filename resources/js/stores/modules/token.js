import App from './../../app'
class Token{
    isValid(token){
        const payload = this.payload(token);
        return payload.iss === (App.cons_url + "auth/login");
    }
    payload(token){
        const payload = token.split('.')[1];
        return this.decode(payload);
    }
    decode(payload){
        return JSON.parse(atob(payload));
    }

}
export default Token = new Token()
