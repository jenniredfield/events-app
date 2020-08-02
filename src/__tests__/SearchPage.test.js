import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '../custom-render';
import SearchPage from '../components/SearchPage';
import axios from 'axios';
import { useParams } from "react-router-dom";

describe('<SearchPage/>', () => {
    test('opening a search page with keyword fetches events data', async () => {
        useParams.mockReturnValue({ keyword: 'manchester' });
        const {getByText} = render(<SearchPage/>);

        await waitForElementToBeRemoved(() => screen.getByTestId('loading'));

        expect(axios.get).toHaveBeenCalledTimes(1);

        expect(getByText('Park N Party Drive-In Live: The Mamma Mia Experience')).toBeInTheDocument();

        expect(screen.queryAllByTestId('event-card')).toHaveLength(20);
        expect(screen.queryAllByText('view details')).toHaveLength(20);
      });
});
