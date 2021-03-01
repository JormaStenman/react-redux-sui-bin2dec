import React from "react";
import {Form, Grid, Header, Message, Segment} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";
import {selectDecimal, selectError, setUserInput} from "./converterSlice";

export default function Converter() {
    const dispatch = useDispatch();
    const decValue = useSelector(selectDecimal);
    const error = useSelector(selectError);

    function handleChange(event, data) {
        dispatch(setUserInput(data.value));
    }

    return (
        <Grid centered>
            <Grid.Column>
                <Header as='h2'>Convert binary numbers to decimal</Header>
                <Segment>
                    <Form>
                        <Form.TextArea
                            label='Binary value'
                            placeholder='binary digits'
                            onChange={handleChange}
                            error={error && {content: 'use 0, 1 only'}}
                        />
                    </Form>
                    <Message header='Decimal value' content={decValue}/>
                </Segment>
            </Grid.Column>
        </Grid>
    );
}