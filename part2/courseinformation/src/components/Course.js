import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = (props) => {
    // console.log(props);
    const course = props.course;
    return (
        <div>
            <Header name = {course.name} />
            <Content parts = {course.parts.map(part => part)} />
            <Total exercises = {course.parts.map(part => part.exercises)} />
        </div>
    )
}

export default Course;