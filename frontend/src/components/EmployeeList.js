import React, { useState, useEffect } from 'react';
import AddEmployee from './AddEmployee';
import employee from '../apis/employee';
const TodoList = () => {
	const [employees, setEmployees] = useState([]);



	const addEmployee = async (data) => {
		const response = await employee.post('/employees', { ...data, id: Math.random() });
		console.log(response.data);
		setEmployees([...employees, response.data])
	};
	const removeEmployee = async (data) => {
		let deleteEmp = [...employees];
		let deleteID = deleteEmp.pop();
		//console.log(deleteID, "deleteID");
		const response = await employee.delete(`/employees/${deleteID.id}`);
		let latestData = employees.filter(data => data.id != deleteID.id);
		//console.log(response.data);
		setEmployees(latestData);
	};
	useEffect(() => {
		const getEmployee = async (data) => {
			const response = await employee.get('/employees');
			//console.log(response.data);
			setEmployees(...employees, response.data)
		};
		getEmployee();

	}, []);





	return (

		<div>
			<h3 className='text-center pt-5'>IBM Task</h3>
			<AddEmployee addEmployee={addEmployee} removeEmployee={removeEmployee} />
			<div className="row clearfix">
				<div className="col-md-12 column">
					<table
						className="table table-bordered table-hover"
						id="tab_logic"
					>
						<thead>
							<tr>
								<th className="text-center"> NAME </th>
								<th className="text-center"> SALARY </th>
								<th className="text-center"> DESIGNATION </th>

							</tr>
						</thead>
						<tbody>
							{employees.length > 0 && employees.map((item, idx) => (
								<tr id="addr0" key={idx}>

									<td>
										{item.name || 'N/A'}
									</td>
									<td>
										{item.salary || 'N/A'}
									</td>
									<td>
										{item.designation || 'N/A'}
									</td>
								</tr>
							))}
						</tbody>
					</table>
					{/* <button onClick={handleAddRow} className="btn btn-primary">
							Add Row
						</button>
						<button
							onClick={handleRemoveRow}
							className="btn btn-danger float-right"
						>
							Delete Last Row
						</button> */}
				</div>
			</div>
		</div>

	)
};

export default TodoList;









