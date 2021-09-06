import classes from "./Search.module.css";


const Search = () => {
    return(
        <div className={classes.search_}>
        <h1 className={classes.heading}>Creativist</h1>
        <small className={classes.caption}>Let's use the waste in a creative way!</small>
    <form>
      <input type="text" placeholder="Search.." name="search" />
      <button type="button" class="btn btn-success">Success</button>
      </form>
    </div>
    );
}

export default Search;