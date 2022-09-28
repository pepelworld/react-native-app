import axiosCreate from '../AxiosCreate';

class AuthService {
    getUserData = async (email: string, password: string) => {
        return axiosCreate().post('api/login', {
            email: email,
            password: password,
        });
    };
}

export default new AuthService();
