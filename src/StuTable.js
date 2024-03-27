import Table from 'react-bootstrap/Table';

function StuTable() {
  return (
   <div className='mt-5'>
     <Table striped bordered hover variant="dark">
      <thead >
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01</td>
          <td>Devid</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>15/01/1991</td>
        </tr>
        <tr>
          <td>02</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>04/06/1980</td>
        </tr>
        <tr>
          <td>03</td>
          <td>Larry </td>
          <td>Jones</td>
          <td>@twitter</td>
          <td>10/12/1987</td>
        </tr>
        <tr>
          <td>04</td>
          <td>mark </td>
          <td>Thomos </td>
          <td>@facebook</td>
          <td>14/07/1997</td>
        </tr>
      </tbody>
    </Table>
   </div>
  );
}

export default StuTable;