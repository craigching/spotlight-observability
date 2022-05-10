import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DatePicker from 'react-datepicker';

const DateRangePicker = () => {

    const placement = 'bottom';

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <OverlayTrigger
            trigger="click"
            key={placement}
            placement={placement}
            overlay={
                <Popover id={`popover-positioned-${placement}`}>
                    <Popover.Body>
                        <Container>
                            <Row>
                                <Col>Absolute time</Col>
                                <Col>Relative time</Col>
                            </Row>
                            <Row>
                                <Col>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        popperPlacement="left"
                                    />
                                </Col>
                                <Col>
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        popperPlacement="left"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Popover.Body>
                </Popover>
            }
        >
            <Button variant="primary">Last 30 Minutes</Button>
        </OverlayTrigger>
    )

}

export default DateRangePicker;
