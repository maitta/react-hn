import axios from "axios";

const StoryType = {
    top: 'top',
    best: 'best',
    new: 'new',
    ask: 'ask',
    show: 'show',
    job: 'job'
}

export {StoryType};

const hnAPI = {
    baseUrl: 'https://hacker-news.firebaseio.com/v0',
    baseUrlAlt: 'https://node-hnapi.herokuapp.com',
    fetchStories: function(storyType) {
        return new Promise((resolve) => {
            axios.get(`${this.baseUrl}/${storyType}stories.json`).then((response) => {
                console.debug(`Fetching topstories: ${JSON.stringify(response, null, 4)}`)
                resolve(response.data);
            })
            .catch((error) => {
                console.log(error);
                throw new Error(`Could not fetch Hacker News' ${storyType} stories`);
            })
        })        
    },
    fetchItem: function(id) {
        return new Promise((resolve) => {
            axios.get(`${this.baseUrl}/item/${id}.json`).then((response) => {
                console.debug(`Fetching single story #${id}: ${JSON.stringify(response, null, 4)}`);
                resolve(response.data);
            }).catch((error) => {
                console.log(error);
                throw new Error(`Could not fetch Hacker News' single story id #${id}`);
            })
        })
    },
    fetchUser: function(id) {
        return new Promise((resolve) => {
            axios.get(`${this.baseUrl}/user/${id}.json`).then((response) => {
                console.debug(`Fetching user #${id}: ${JSON.stringify(response, null, 4)}`);
                resolve(response.data);
            }).catch((error) => {
                console.log(error);
                throw new Error(`Could not fetch Hacker News' user id: ${id}`);
            })
        })
    },
    fetchItemAlt: function(id) {
        return new Promise((resolve) => {
            axios.get(`${this.baseUrlAlt}/item/${id}`).then((response) => {
                console.debug(`Alternative HN API called with item id ${id} and returned ${response}`);
                resolve(response.data);
            }).catch((error) => {
                console.log(error);
                throw new Error(`Alternative HN API could not fetch item id #${id}`);
            })
        })
    }
}

export default hnAPI;