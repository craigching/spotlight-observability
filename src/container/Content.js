import React, {useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormGroup from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button';
import { Typeahead } from 'react-bootstrap-typeahead';
import DatePicker from 'react-datepicker';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const Content = () => {

    const [multiSelections, setMultiSelections] = useState([]);
    const [from, setFrom] = useState(new Date());
    const [to, setTo] = useState(new Date());

    const options = [
        {name: "application: metrics"},
        {name: "cluster: shared"},
        {name: "stack: queryengine"},
        {name: "container: app"}
    ];

    const DateTimeInput = ({ value, onClick }) => (
        <Button
            variant="primary"
            className="queryRow"
            onClick={onClick}
        >
            {value}
        </Button>
    );

    return (
        <FormGroup>
        <InputGroup>
            <InputGroup.Text>
                Filter
            </InputGroup.Text>
        <Typeahead
            id="basic-typeahead-multiple"
            labelKey="name"
            multiple
            onChange={setMultiSelections}
            options={options}
            placeholder="application:..."
            selected={multiSelections}
            className="queryRow"
        />
        {/* <span>From:&nbsp;</span> */}
        <DatePicker
            showTimeSelect
            selected={from}
            dateFormat="yyyy-MM-dd HH:mm:ss"
            timeInterval={15}
            onChange={date => setFrom(date)}
            customInput={<DateTimeInput />}
        />
        <span>&nbsp;-&gt;&nbsp;</span>
        <DatePicker
            showTimeSelect
            selected={to}
            dateFormat="yyyy-MM-dd HH:mm:ss"
            timeInterval={15}
            onChange={date => setTo(date)}
            customInput={<DateTimeInput />}
        />
        {/* <span>&nbsp;</span> */}
        <Button
            variant="primary"
            className="queryRow"
        >
            Refresh
        </Button>
        </InputGroup>
        </FormGroup>
    );

}

export default Content;