import {IUser} from '../pages/Users'

export const checkIfUserExists = (users: IUser[] | null, userEmail: string): boolean => {
    if (users === null) return false
    return users.some(user => user.email === userEmail)
}