
const Header = (props) => {
    const name = props.name;
    //console.log(name);
    
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default Header;