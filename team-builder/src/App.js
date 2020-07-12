import React from 'react';
import './App.css';
import Form from "./Form.js";
import TeamMember from "./TeamMember";

function App() {
  const [members, setMembers] = React.useState([])
  return (
    <div>
      <Form members={members} setMembers={setMembers}/>
      <TeamMember members={members}/>
    </div>
  );
}

export default App;
