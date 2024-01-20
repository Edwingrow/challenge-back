export interface AuthRepository {
    login(username: string): Promise<any>
}