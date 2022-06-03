import React, { useState } from 'react';

const AddEmployee = (props) => {
	const [employee, setEmployee] = useState({ name: '', salary: '', designation: '' });

	const onFormSubmit = e => {
		e.preventDefault();
		props.addEmployee(employee);
	};
	const handleRemoveRow = e => {
		e.preventDefault();
		props.removeEmployee();
	}
	const onChangeInput = e => {

		let emp = { ...employee };
		emp[e.target.name] = e.target.value;

		setEmployee(emp);
	}
	return (

		<form className='mt-5'>
			<div className="form-row">

				<div className="col"> <label htmlFor="todo" className='mr-1'>Name </label>
					<input type="text" name='name' value={employee.name} onChange={(e) => onChangeInput(e)} />
				</div>

				<div className="col"> <label htmlFor="salary" className='mr-1'>Salary </label>
					<input type="text" name='salary' value={employee.salary} onChange={(e) => onChangeInput(e)} />
				</div>

				<div className="col"> <label htmlFor="designation" className='mr-1'>Designation </label>
					<input type="text" name='designation' value={employee.designation} onChange={(e) => onChangeInput(e)} />
				</div>
			</div>


			<br />
			<div className='text-center mb-5'>
				<button onClick={onFormSubmit} className="btn-sm btn-primary mr-5 button5 p-2">
					Add
				</button>
				<button
					onClick={handleRemoveRow}
					className="btn-sm btn-primary button5 p-2"
				>
					Remove
				</button>
			</div>
		</form>
	);
}

export default AddEmployee;