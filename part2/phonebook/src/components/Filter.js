const Filter = (props) => {

    const search = props.search
    const handleChangedSearch = props.handleChangedSearch

    return (
        <p>filter shown with <input type='text' value={search} onChange={handleChangedSearch} /></p>
    )
}

export default Filter;