import {defineStore} from "pinia";
import axios from "axios";


export const useUserStore = defineStore('userStore', {
    state: () => ({
        wasSuccess: false,
    }),
    getters: {},

    actions: {

        async registerUser(firstName, lastName, birthDate, emailAdresse, username, password) {
            const apiUrl = 'https://boutique-hotel.helmuth-lammer.at/api/v1/register';
            try {
                const response = await axios.post(apiUrl, {
                    firstname: firstName,
                    lastname: lastName,
                    email: emailAdresse,
                    birthdate: birthDate,
                    username: username,
                    password: password,
                });
                this.wasSuccess = true;
                localStorage.setItem("token", response.data);
            } catch (error) {
                console.log(error);
            }
        },

        async handleLogin(clientID, clientSecret) {
            const apiUrl = `https://boutique-hotel.helmuth-lammer.at/api/v1/login`;

            try {
                const response = await axios.post(apiUrl, {
                    clientID: clientID,
                    clientSecret: clientSecret,
                });
                localStorage.setItem('token', response.data);
            } catch (error) {
                console.log(error);
            }
        }
    },
});