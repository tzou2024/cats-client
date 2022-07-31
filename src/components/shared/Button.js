import Button from 'react-bootstrap/Button';

function OutlineTypesExample({text, onClick}){
  return (
    <>
      <Button variant="outline-primary" onClick={onClick}>{text}</Button>
    </>
  );
}

export default OutlineTypesExample;