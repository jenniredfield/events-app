import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '../custom-render';
import ArtistPage from '../components/ArtistPage';
import axios from 'axios';
import { useParams } from "react-router-dom";

describe('<ArtistPage/>', () => {
    test('opening artist page with artist id fetches event data', async () => {
        useParams.mockReturnValue({ artistId: '123553181' });
        const {getByText} = render(<ArtistPage/>);

        await waitForElementToBeRemoved(() => screen.getByTestId('loading'));

        expect(axios.get).toHaveBeenCalledTimes(1);

        expect(getByText('Damian Marley')).toBeInTheDocument();
      });
});
