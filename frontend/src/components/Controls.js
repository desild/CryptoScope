// Controls component logic
class Controls {
    constructor() {
        this.scrapingActive = false;
    }

    startScraping() {
        this.scrapingActive = true;
        return { status: 'started', timestamp: new Date().toISOString() };
    }

    pauseScraping() {
        this.scrapingActive = false;
        return { status: 'paused', timestamp: new Date().toISOString() };
    }

    getStatus() {
        return { 
            scrapingActive: this.scrapingActive,
            lastUpdated: new Date().toISOString()
        };
    }
}

export default Controls;