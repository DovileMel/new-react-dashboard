import React, { Component } from 'react';
import ItemCard from './ItemCard';
import OrderStatus from './OrderStatus';


class UserCard extends Component {

	constructor() {
		super();
		this.state = {
			isAccepted: false,
			isRejected: false,
			isStatus: 0,
			};

		this.acceptHandler = this.acceptHandler.bind(this);
		this.rejectHandler = this.rejectHandler.bind(this);
		this.statusHandler = this.statusHandler.bind(this);
	}

	acceptHandler() {
		this.setState({
			isAccepted: true,
			isRejected: true,
			isStatus: 2,
			})
	}

	rejectHandler() {
		this.setState({
			isRejected: true,
			isAccepted: true,
			isStatus: 3,
			})
	}

	statusHandler(){
		this.setState({
			isStatus: 1,
		})
	}

	render() {

			return (
				<section>
					<div className="box col col-xs-12">

							<div className="row">
						  		<div className='order_status col col-xs-1'>
		          			<OrderStatus status={this.props.statusHandler} />
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
										onClick={this.acceptHandler}
										>
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
