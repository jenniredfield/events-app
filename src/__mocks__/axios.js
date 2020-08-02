import EventsMockData from '../mockData/EventsMockData';
import EventDetailMockData from '../mockData/EventDetailMockData';
import ArtistDetailMockData from '../mockData/ArtistDetailMockData'
import keys from '../keys';

export default {
    get: jest.fn().mockImplementation(url => {
        switch (url) {
            case `https://www.skiddle.com/api/v1/events/search?api_key=${keys.apiKey}&keyword=manchester`: 
                return Promise.resolve({data: EventsMockData});
            case `https://www.skiddle.com/api/v1/events/13741832?api_key=${keys.apiKey}`:
                return Promise.resolve({data: EventDetailMockData});
            case `https://www.skiddle.com/api/v1/artist/123553181?api_key=${keys.apiKey}`:
                return Promise.resolve({data: ArtistDetailMockData})
            default: {
                 throw new Error(`UNMATCHED URL: ${url}`);
            }
        }
    })
}

