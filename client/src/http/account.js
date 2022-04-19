import host from './index'

export const login = async (nameOrEmail, password) => {
    const response = await host.post('account/login', { nameOrEmail, password })
    return response
}

export const register = async (name, email, password) => {
    const response = await host.post('account/register', { name, email, password })
    return response
}
