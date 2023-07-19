import React from 'react';
import moment from 'moment'

function InvoiceItem({ id, name, priority, dueDate, note }) {
  const currentDate = moment().format('DD/MM/YYYY');
console.log("dueDate",dueDate)
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{priority}</td>
      <td className={dueDate > currentDate ? "bg-default" : "bg-danger"}>{moment(dueDate, 'DD/MM/YYYY').format('DD/MM/YYYY')}</td>
      <td>{note}</td>
    </tr>
  );
}

export default InvoiceItem;
