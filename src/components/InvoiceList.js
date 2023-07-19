// import React from 'react';
// import InvoiceItem from './InvoiceItem';
// import Table from 'react-bootstrap/Table';
// import data from '../../data.json';

// function InvoiceList(invoices) {
//   let list = invoices;
//   console.log("invoices",invoices)

//   return (
//     <div>
//       <h2>Invoice List</h2>
//       <Table striped>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Priority</th>
//             <th>Due Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {list.length > 0 ? (
//             list.map((invoice) => (
//               <InvoiceItem id={invoice.id} name={invoice.name} priority={invoice.priority} dueDate={invoice.dueDate} />
//             ))
//           ) : (
//             <tr>
//               <td>No invoices found.</td>
//             </tr>
//           )}
//         </tbody>
//       </Table>



//       {/* {invoices.length > 0 ? (
//         invoices.map((invoice) => (
//           <InvoiceItem key={invoice.id} invoice={invoice} />
//         ))
//       ) : (
//         <p>No invoices found.</p>
//       )} */}


//     </div>
//   );
// }

// export default InvoiceList;
