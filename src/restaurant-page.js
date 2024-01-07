import { swiggy_img_url } from './components/utils/constants'
import { useParams } from 'react-router-dom'
import useFetchResData from './components/utils/useFetchResData'
import Shimmer from './components/shimmer'

const Restaurant = () => {
	const { resId } = useParams()

	const resturantProfile = useFetchResData(resId)

	const {
		name,
		cuisines,
		cloudinaryImageId,
		avgRating,
		locality,
		costForTwo,
		totalRatingsString
	} = resturantProfile

	return resturantProfile.length == 0 ? (
		<Shimmer />
	) : (
		<div className="restaurant-page">
			<header className="restaurant-page-header">
				<h1>{name}</h1>
				<p> Cuisines : {cuisines.join(',')}</p>

				<span className="star">{resturantProfile?.locality}</span>
				<span className="rating-value">{locality}</span>
			</header>
			<main className="main-content">
				<section className="restaurant-info">
					<img
						className="restaurant-image"
						src={swiggy_img_url + cloudinaryImageId}
						alt="Restaurant Image"
					/>
					<div className="info-text">
						<p>Delicious food delivered to your doorstep.</p>
						<div className="rating">
							<span className="star">&#9733;</span>
							<span className="rating-value">{avgRating}</span> {totalRatingsString}
						</div>
					</div>
				</section>
				<section className="menu">
					<h2>Menu</h2>
					Add your menu items here
					<div className="menu-item">
						<p>Pizza</p>
						<p>$10.99</p>
					</div>
					<div className="menu-item">
						<p>Pasta</p>
						<p>$8.99</p>
					</div>
					Add more menu items as needed
				</section>
			</main>
			<footer className="footer">
				<button className="order-button">Order Now</button>
			</footer>
		</div>
	)
}

export default Restaurant
