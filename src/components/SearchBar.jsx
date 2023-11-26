import { Search } from './icons/Search';
import './SearchBar.css';

export const SearchBar = ({ onClick }) => {
	return (
		<search className='searchBar' role='search'>
			<label htmlFor='' className='searchBar__inputContainer'>
				<span className='searchBar__icon'>
					<Search width={'1.5rem'} height={'1.5rem'} />
				</span>
				<input
					className='searchBar__input'
					type='text'
					placeholder='Search location'
				></input>
			</label>
			<button className='searchBar__button' type='button' onClick={onClick}>
				Search
			</button>
		</search>
	);
};
