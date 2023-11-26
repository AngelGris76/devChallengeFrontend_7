import { Search } from './icons/Search';
import './SearchBar.css';

export const SearchBar = ({ onClick }) => {
	return (
		<search role='search'>
			<form className='searchBar' onSubmit={onClick}>
				<label className='searchBar__inputContainer'>
					<span className='searchBar__icon'>
						<Search width={'1.5rem'} height={'1.5rem'} />
					</span>
					<input
						className='searchBar__input'
						type='text'
						placeholder='Search location'
						name='searchCity'
					></input>
				</label>
				<button className='searchBar__button' type='submit'>
					Search
				</button>
			</form>
		</search>
	);
};
