import EventsMockData from '../mockData/EventsMockData';

export default {
    get: jest.fn().mockImplementation(url => {
        switch (url) {
            case `https://www.skiddle.com/api/v1/events/search?api_key=008f1e6099ecc48e990e3776784d447b&keyword=manchester`: 
                return Promise.resolve({data: EventsMockData})
            default: {
                 throw new Error(`UNMATCHED URL: ${url}`);
            }
        }
    })
}

