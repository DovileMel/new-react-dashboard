import React, { Component } from 'react';
import ItemCard from './ItemCard';


class UserCard extends Component {

	constructor() {
		super();
		this.state = {
			isAccepted: false,
			isRejected: false,
		};

		this.acceptHandler = this.acceptHandler.bind(this);
		this.rejectHandler = this.rejectHandler.bind(this);

	}

	acceptHandler() {
		this.setState({
			isAccepted: true,
			isRejected: true
		})
	}

	rejectHandler() {
		this.setState({
			isRejected: true,
			isAccepted: true
		})
	}

	render() {

			return (
				<section>
					<div className="box col col-xs-12">

							<div className="row">
						  		<div className='order_status col col-xs-1'>
						      		<span><b>{this.props.order.order_state}</b></span>
						      </div>

						      <div className='order_number col col-xs-2'>
						           <span># {this.props.order.order_id}</span><br/>
						      </div>

						      <div className='order_data col col-xs-7'>
											<div className="row">
						          		<span>{this.props.order.order_quantity} items</span>
											</div>
											<div className="row">
						          		<ul>
						            		{this.props.order.order.map( (good, index) =>
						            		<ItemCard key={index} order={good} />
					            			)}
						            	</ul>
											</div>
						       </div>

									 <div className='order_total col col-xs-2'>
											<div className="row">
													<span>{this.props.order.order_time}</span>
											</div>
											<div className="row">
						            <span><b>$ {this.props.order.order_total}</b></span>
											</div>
						        </div>
							</div>


							<div className="row">
						  		<div className='col col-xs-6' >
										{!this.state.isAccepted &&
										<button type="button"
										className="btn"
										onClick={this.acceptHandler}>
										Confirm
										</button>
										}
									</div>

									<div className='col col-xs-6' >
										{!this.state.isRejected &&
										<button type="button"
										className="btn"
										onClick={this.rejectHandler}>
										Reject
										</button>}
									</div>

							</div>

					</div>
			 </section>
			);
		return null;
	}
}

export default UserCard;
