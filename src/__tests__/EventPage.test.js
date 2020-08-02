import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '../custom-render';
import EventPage from '../components/EventPage';
import axios from 'axios';
import { useParams } from "react-router-dom";

describe('<EventPage/>', () => {
    test('opening event page with event id fetches event data', async () => {
        useParams.mockReturnValue({ eventId: '13741832' });
        const {getByText} = render(<EventPage/>);

        await waitForElementToBeRemoved(() => screen.getByTestId('loading'));

        expect(axios.get).toHaveBeenCalledTimes(1);

        expect(getByText('Damian Jr. Gong Marley')).toBeInTheDocument();

      });
});
