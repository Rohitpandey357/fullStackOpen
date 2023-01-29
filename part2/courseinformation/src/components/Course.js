import Header from './Header';
import Content from './Content';


const Course = (props) => {
    // console.log(props);
    const course = props.course;
    return (
        <div>
            <Header name = {course.name} />
            <Content parts = {course.parts.map(part => part)} />
        </div>
    )
}

export default Course;