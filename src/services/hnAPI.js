import axios from "axios";

const hnAPI = {
    baseUrl: 'https://hacker-news.firebaseio.com/v0',
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
    }
}

export default hnAPI;