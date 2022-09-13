import { BiSearchAlt2 } from 'react-icons/bi';

const SearchBar = () => {
  return (
    <>
     <div class="input-group">
        <input type="text" class="form-control outline-0  " placeholder="Search for..."/>
        <button type="submit" class="border-0 input-group-text btn-success fs-4 bg_primary text-light">
            <BiSearchAlt2/>
        </button>
    </div>   
    </>
  )
}

export default SearchBar