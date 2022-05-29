
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const MorningCall = (props) => {
  return <h1>Good morning, {props.name} !!!</h1>;
}

const Profile = (props) => {
  return <div>
    <p>age : {props.age}</p>
    <p>borned in the place : {props.country}</p>
  </div>
}

export { Welcome, MorningCall, Profile };
//export morningCall;
