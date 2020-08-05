import axios from 'axios';

// Criando instancia do axios para termos uma URL em que todas as chamadas irão partir
const api = axios.create({
    baseURL: 'https://rocketseat-node.herokuapp.com/api'
});

export default api;