import axios from "axios";

const hnAPI = {
    baseUrl: 'https://hacker-news.firebaseio.com/v0',
    baseUrlAlt: 'https://node-hnapi.herokuapp.com',
    fetchStories: function() {
        return new Promise((resolve) => {
            axios.get(`${this.baseUrl}/topstories.json`).then((response) => {
                // TODO debug flag
                //console.debug(`Fetching topstories: ${JSON.stringify(response, null, 4)}`)
                resolve(response.data);
            })
            .catch((error) => {
                console.log(error);
                throw 'Could not fetch Hacker News\' stories';
            })
        })        
    },
    fetchItem: function(id) {
        return new Promise((resolve) => {
            axios.get(`${this.baseUrl}/item/${id}.json`).then((response) => {
                console.debug(`Fetching single story #${id}: ${JSON.stringify(response, null, 4)}`)
                resolve(response.data);
            }).catch((error) => {
                console.log(error);
                throw `Could not fetch Hacker News\' single story id #${id}`;
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
                throw `Alternative HN API could not fetch item id #${id}`;
            })
        })
    }
}

export default hnAPI;