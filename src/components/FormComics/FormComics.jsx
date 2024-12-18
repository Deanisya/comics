import React from 'react';
import style from './FormComics.module.css';
import useInput from '../../hooks/useInput';

// name: e.show.name,
// 					link_url: e.show.url,
// 					img_src: e.show.image.original,
// 					rating: e.show.rating.average,
// 					premiered: e.show.premiered,
// 					desc: e.show.summary,
// 					id: e.show.id,

function FormComics(props) {
	// let [state, setState] = useState('');

	let name = useInput();
	let link_url = useInput();
	let img_src = useInput();
	let rating = useInput();
	let premiered = useInput();
	let desc = useInput();

	const handlerAddComic = e => {
		e.preventDefault();
		let obj = {
			name: name.value,
			link_url: link_url.value,
			img_src: img_src.value,
			rating: rating.value,
			premiered: premiered.value,
			desc: desc.value,
			id: new Date().getTime(),
		};
		// console.log(obj);
		props.addComics(obj);
		props.closeModal();
	};

	return (
		<form>
			<div>
				<label>
					Name
					<br />
					{/* <input type='text' value={state} onChange={e => setState(e.target.value)}/> (1)
						<input type='text' value={name.value} onChange={name.onChange}/>  (2) */}
					<input type='text' {...name} />
				</label>
			</div>
			<div>
				<label>
					Link to comic
					<br />
					<input type='text' {...link_url} />
				</label>
			</div>
			<div>
				<label>
					Link to image
					<br />
					<input type='text' {...img_src} />
				</label>
			</div>
			<div>
				<label>
					Rating
					<br />
					<input type='text' {...rating} />
				</label>
			</div>
			<div>
				<label>
					Premiered
					<br />
					<input type='text' {...premiered} />
				</label>
			</div>
			<div>
				<label>
					Description
					<br />
					<input type='text' {...desc} />
				</label>
			</div>
			<button onClick={handlerAddComic}>Add</button>
		</form>
	);
}

export default FormComics;
