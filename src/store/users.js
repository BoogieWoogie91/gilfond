import axios from 'axios'
import { toast } from 'vue3-toastify';

export default {
    namespaced: true,
    state: {
        foundUsers: [],
        selectedUser: {},
    },
    
    mutations: {
        setFoundUsers(state, users) {
            if (users.length > 0) {
                state.foundUsers = users
            } else {
                state.foundUsers = []
            }
            
        },

        setSelectedUser(state, index) {
            state.foundUsers[index].selected = !state.foundUsers[index].selected;
                state.selectedUser = state.foundUsers[index];
            
        },

        unselectAllUsers(state) {
            state.foundUsers.map(item => {
                item.selected = false
            })
        },

        deleteSelectedUser(state) {
            state.selectedUser = {};
        }


    },
  
    actions: {
        async getUsers({ commit }, data) {
            let queryString = `https://jsonplaceholder.typicode.com/users`
            commit('deleteSelectedUser');

            let ids = 0;
            let usernames = 0;

            if (data.length) {
                data = data.split(',')
                queryString = `${queryString}?`
                data.map((item, index) => {
                    item = item.trim();
                    if (item.length > 0) {                        
                        if (index > 0) {
                            queryString = `${queryString}&`
                        }

                        if (Number(item)) {
                            ids +=1
                            queryString = `${queryString}id=${item}`
                        } else {
                            usernames += 1;
                            const firstLetter = item.charAt(0)
                            const firstLetterCap = firstLetter.toUpperCase()
                            const remainingLetters = item.slice(1)
                            const capitalizedWord = firstLetterCap + remainingLetters
                            queryString = `${queryString}username=${capitalizedWord}`
                        }
                    }
                    
                })

                if (ids > 0 && usernames > 0) {
                    toast("Я боюсь бэкэнд не позволяет искать по id и по username одновременно:(", {
                        "theme": "colored",
                        "type": "error",
                        "autoClose": 2000,
                        "dangerouslyHTMLString": true
                    })

                    commit('setFoundUsers', []);
                    return
                }
                
                await axios.get(queryString).then(res => {
                    commit('setFoundUsers', res.data)
                    if (res.data.length > 0) {
                        toast("Все прошло замечательно, список пользователей получен", {
                            "theme": "colored",
                            "type": "success",
                            "autoClose": 2000,
                            "dangerouslyHTMLString": true
                        })
                    }
                    
                })
            } else {
                commit('setFoundUsers', [])
            }            
        },


        async selectUser({ commit, state }, user) {
            commit('unselectAllUsers')
            const index = state.foundUsers.indexOf(user);
            commit('setSelectedUser', index)
        },
    },
  
    getters: {

    }

}