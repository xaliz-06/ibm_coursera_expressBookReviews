const axios = require('axios');

const API = axios.create({
    baseURL: 'https://u2130104-5000.theiadockernext-0-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai',
});

API.get('/', async function (req, res) {
    try {
        const response = await axios.get('/'); 
        const books = response.data;

        return res.status(200).json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

API.get('/isbn/:isbn', async function (req, res) {
    try {
        const isbn = req.params.isbn;
        const response = await axios.get(`/isbn/${isbn}`); 
        const bookDetails = response.data;

        return res.status(200).json(bookDetails);
    } catch (error) {
        console.error('Error fetching book data:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

API.get('/author/:author', async function (req, res) {
    try {
        const author = req.params.author;
        
        const response = await axios.get(`/author/${author}`); 
        const authorBooks = response.data;

        return res.status(200).json(authorBooks);
    } catch (error) {
        console.error('Error fetching books by author:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

API.get('/title/:title', async function (req, res) {
    try {
        const title = req.params.title;
        
        const response = await axios.get(`/title/${title}`);
        const titleBooks = response.data;

        return res.status(200).json(titleBooks);
    } catch (error) {
        console.error('Error fetching books by title:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});
