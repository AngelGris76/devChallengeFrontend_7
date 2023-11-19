export const SearchBar = ({ onClick }) => {
	return (
		<search className='searchBar' role='search'>
			<input
				className='searchBar__input'
				type='text'
				placeholder='Search location'
			></input>
			<button className='searchBar__button' type='button' onClick={onClick}>
				Search
			</button>
		</search>
	);
};
