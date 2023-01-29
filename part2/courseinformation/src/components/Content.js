import Part from './Part.js';

const Content = (props) => {
    // console.log(props);
    const parts = props.parts;
    return (
      <div>
        {parts.map(part => <Part key={part.id} part={part} />)}
      </div>
    )
  }

  export default Content;