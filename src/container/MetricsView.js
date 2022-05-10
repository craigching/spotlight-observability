import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import DateRangePicker from '../components/DateRangePicker';

const MetricsView = () => {
    return (
        <Form>
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Search for metrics ..."
                aria-label="Metrics search"
                aria-describedby="basic-addon2"
            />
            <DateRangePicker />
        </InputGroup>
        </Form>
    )
}

export default MetricsView;
