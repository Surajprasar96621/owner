import { useReducer } from "react";
import "./App.css";
import { UserRow } from "./Component/UserRow";


const initialState = {
  name: '',
  gender: '',
  role: '',
  maritalStatus: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'gender':
      return { ...state, gender: action.payload };
    case 'role':
      return { ...state, role: action.payload };
    case 'maritalStatus':
      return { ...state, maritalStatus: action.payload };
    case 'reset':
      return initialState;
    default:
      throw new Error('Invalid action type');
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, gender, role, maritalStatus } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log(state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => dispatch({ type: 'name', payload: e.target.value })}
        />
        <select
          value={gender}
          onChange={(e) => dispatch({ type: 'gender', payload: e.target.value })}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Prefer Not to Say">Prefer Not to Say</option>
        </select>
        <select
          value={role}
          onChange={(e) => dispatch({ type: 'role', payload: e.target.value })}
        >
          <option value="">Select Role</option>
          <option value="FrontEnd Developer">FrontEnd Developer</option>
          <option value="BackEnd Developer">BackEnd Developer</option>
          <option value="FullStack Developer">FullStack Developer</option>
        </select>
        <label>
          <input
            type="checkbox"
            checked={maritalStatus}
            onChange={(e) =>
              dispatch({ type: 'maritalStatus', payload: e.target.checked })
            }
          />
          Married
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </button>
      </form>

      {name || gender || role || maritalStatus ? (
        <table data-testid="user-container">
          <thead>
            <tr>
              <th>S.no</th>
              <th>User</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Marital Status</th>
            </tr>
          </thead>
          <tbody>
            <UserRow
              name={name}
              gender={gender}
              role={role}
              maritalStatus={maritalStatus ? 'Married' : 'Unmarried'}
            />
          </tbody>
        </table>
      ) : (
        <h2 data-testid="no-user-container">No users found</h2>
      )}
    </div>
  );
};
export default App;
export {reducer, initialState}
