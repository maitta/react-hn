const pagination = {
        
    maxStories: 30,
    // HN official API returns no more than the first 500 stories for new, top and bes. See https://github.com/HackerNews/API
    getMaxPages: function() {
        return 500/this.maxStories;
    },
    // HN official APi returns no more than the first 120 stories for ask.
    getMaxPagesMedium: function() {
        return 120/this.maxStories;
    },
    // HN official APi returns no more than the first 60 stories for jobs and show.
    getMaxPagesShort: function() {
        return 60/this.maxStories;
    },
    /**
     * Sanitizes url input for paging.
     * @returns a positive integer 1 to n.
     */
    getPageId: function(param) {
        let pageId;
        if(isNaN(param)) pageId = 1;
        else {
            pageId = param === 0 ? 1 : param;
        }
        return Number(pageId);
    },
    getDisplayIndex: function(pageId) {
        return ((pageId - 1) * this.maxStories) + 1;
    }
}

export default pagination;