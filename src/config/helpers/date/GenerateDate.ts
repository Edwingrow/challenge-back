export class GenerateDate {
    static generateExpirationDate() {
        const dateCurrent = new Date();
        const expirationDate  = new Date(dateCurrent.getTime() + 2 * 60 * 60 * 1000);
        const formattedExpiration = expirationDate.toLocaleString()
        return formattedExpiration
    }
}