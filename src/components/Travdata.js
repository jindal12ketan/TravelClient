const response = await fetch('http://localhost:7070/travdata', {
    method: 'GET',
});
const Travdata = await response.json();
export default Travdata;