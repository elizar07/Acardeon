import React, { useState } from 'react'
import { SlArrowRight } from 'react-icons/sl'

const Faq = ({ list }) => {
	const [openId, setId] = useState(null)
	const [rotate, setRotate] = useState(false)
	const click = id => {
		if (id === openId) setId(null)
		else setId(id)
	}
	return (
		<div id='Faq'>
			<div className='container'>
				<h1 style={{fontSize:"70px",marginLeft:"30pc"}}>Acardeon</h1>
				<div className='faq'>
					{list.map((el, id) => (
						<div className='acardion-item' key={id}>
							<button className='acardion-header' onClick={() => click(id)}>
								{el.a}
								<a
									className={`strelka 
									${id === openId ? 'rotate' : ''}`}
									style={{
										fontSize: '30px',
									}}
								>
									<SlArrowRight />
								</a>
							</button>
							<div
								className={`acardion-collapse ${id === openId ? 'open' : ''}`}
							>
								<div className='acardion-body'>{el.b}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Faq
