import React from 'react';
import { Row, Col, Button, Table } from 'react-bootstrap';

function ModelDetail(props) {

    const modelInfo = {"Title":"String","Description":"String" }

    return (
        <div style={{ padding:'30px' }}>
            <h3> <span style={{ color:'grey' }}>#</span> Model Product </h3>
            <div className='border shadow-sm mt-3' style={{ borderRadius:'5px', padding:'15px 20px' }}>
                <Row style={{ padding:'0px 5px' }}>
                    <Col>
                        <h5> <b>{ Object.keys(modelInfo).length } fields</b> </h5>
                    </Col>
                </Row>
            
            </div>
            <div className='shadow-sm mt-3'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Key Name</th>
                            <th>Data Type</th>
                        </tr>
                    </thead>
                    <tbody>

                        { Object.keys(modelInfo).map( (el, index)=> {
                            return <tr>
                                <td>{ index+1 }</td>
                                <td>{ el }</td>
                                <td>{ modelInfo[el] }</td>
                            </tr>
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default ModelDetail