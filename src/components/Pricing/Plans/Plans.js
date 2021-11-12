import Button from '../../shared/Button/Button';
import { ReactComponent as CheckIcon } from '../../../assets/shared/desktop/icon-check.svg';
import styles from './Plans.module.scss';

const Plans = () => {
	return (
		<section className={styles.plans}>
			<div className={styles.planGroup}>
				<h2 className={styles.heading}>Free Plan</h2>
				<p className={styles.tagline}>
					Build and test using our core set of products with up to 100 API
					requests
				</p>
				<span className={styles.price}>$0.00</span>
				<ul className={styles.included}>
					<li className={styles.checked}>
						<CheckIcon /> Transactions
					</li>
					<li className={styles.checked}>
						<CheckIcon /> Auth
					</li>
					<li className={styles.checked}>
						<CheckIcon /> Identity
					</li>
					<li>
						<CheckIcon /> Investments
					</li>
					<li>
						<CheckIcon /> Assets
					</li>
					<li>
						<CheckIcon /> Liabilities
					</li>
					<li>
						<CheckIcon /> Income
					</li>
				</ul>
				<Button type='button' dark>
					Request Access
				</Button>
			</div>

			<div className={styles.planGroup}>
				<h2 className={styles.heading}>Basic Plan</h2>
				<p className={styles.tagline}>
					Launch your project with unlimited requests and no contractual
					minimums
				</p>
				<span className={styles.price}>$249.00</span>
				<ul className={styles.included}>
					<li className={styles.checked}>
						<CheckIcon /> Transactions
					</li>
					<li className={styles.checked}>
						<CheckIcon /> Auth
					</li>
					<li className={styles.checked}>
						<CheckIcon /> Identity
					</li>
					<li className={styles.checked}>
						<CheckIcon /> Investments
					</li>
					<li className={styles.checked}>
						<CheckIcon /> Assets
					</li>
					<li>
						<CheckIcon /> Liabilities
					</li>
					<li>
						<CheckIcon /> Income
					</li>
				</ul>
				<Button type='button' dark>
					Request Access
				</Button>
			</div>

			<div className={styles.planGroup}>
				<h2 className={styles.heading}>Premium Plan</h2>
				<p className={styles.tagline}>
					Get tailored solutions, volume pricing, and dedicated support for your
					team
				</p>
				<span className={styles.price}>$499.00</span>
				<ul className={styles.included}>
					<li className={styles.checked}>
						<CheckIcon /> Transactions
					</li>
					<li className={styles.checked}>
						<CheckIcon /> Auth
					</li>
					<li className={styles.checked}>
						<CheckIcon /> Identity
					</li>
					<li className={styles.checked}>
						<CheckIcon /> Investments
					</li>
					<li className={styles.checked}>
						<CheckIcon /> Assets
					</li>
					<li className={styles.checked}>
						<CheckIcon /> Liabilities
					</li>
					<li className={styles.checked}>
						<CheckIcon /> Income
					</li>
				</ul>
				<Button type='button' dark>
					Request Access
				</Button>
			</div>
		</section>
	);
};

export default Plans;
