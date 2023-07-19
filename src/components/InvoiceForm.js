import React, { useState } from 'react';
import InvoiceItem from './InvoiceItem';
import data from '../../data.json';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import moment from 'moment';



function InvoiceForm() {
  const [invoices, setInvoices] = useState(data);
  const [inputValue, setInputValue] = useState('');
  const [priority, setPriority] = useState('Low');
  const [dueDate, setDueDate] = useState(moment().format('DD/MM/YYYY'));
  const [note, setNote] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };
  

  const handleAddInvoice = () => {
    if (inputValue.trim() !== '') {
      const newInvoice = {
        name: inputValue,
        priority,
        dueDate: moment(dueDate).format('DD/MM/YYYY'),
        note
      };
      setInvoices((prevInvoices) => [...prevInvoices, newInvoice]);
      setInputValue('');
      setPriority('Low');
      setDueDate('');
      setNote('');
    }
    console.log("dueDatedueDatedueDatedueDate", moment(dueDate).format("DD/MM/YYYY"))
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>Create Invoice</h2>
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter a new invoice" value={inputValue} onChange={handleInputChange} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Priority</Form.Label>
                    <Form.Select value={priority} onChange={handlePriorityChange}>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control type="date" value={dueDate} onChange={handleDueDateChange} />
                  </Form.Group>
                </Col>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      placeholder="Notes"
                      value={note} 
                      onChange={handleNoteChange}
                      style={{ height: '100px' }}
                    />
                  </Form.Group>
              </Row>
              <Button className="" variant="success" type="button" onClick={handleAddInvoice}>
                Create Invoice
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className='mt-5'>Invoice List</h2>
            <Table striped>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Priority</th>
                  <th>Due Date</th>
                </tr>
              </thead>
              <tbody>
                {invoices.length > 0 ? (
                  invoices.map((invoice, index) => (
                    <InvoiceItem id={index} name={invoice.name} priority={invoice.priority} dueDate={invoice.dueDate} note={invoice.note} />
                  ))
                ) : (
                  <tr>
                    <td>No invoices found.</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>

      </Container>



    </div>
  );
}


export default InvoiceForm;
