import ScheduleDemo from '../../shared/ScheduleDemo/ScheduleDemo';

import easyImplement from '../../../assets/home/desktop/illustration-easy-to-implement.svg';
import simpleUI from '../../../assets/home/desktop/illustration-simple-ui.svg';
import { ReactComponent as Finances } from '../../../assets/home/desktop/icon-personal-finances.svg';
import { ReactComponent as Banking } from '../../../assets/home/desktop/icon-banking-and-coverage.svg';
import { ReactComponent as Payments } from '../../../assets/home/desktop/icon-consumer-payments.svg';
import styles from './Features.module.scss';

const Features = () => {
	return (
		<section className={styles.features}>
			<div className={styles.container}>
				<div className={styles.showcase}>
					<img src={easyImplement} alt='' />
					<div className={styles.content}>
						<h2 className={styles.heading}>Easy to implement</h2>
						<p className={styles.tagline}>
							Our API comes with just a few lines of code. You'll be up and
							running in no time. We built our documentation page to integrate
							payments functionality with ease.
						</p>
					</div>
				</div>
				<div className={`${styles.showcase} ${styles.second}`}>
					<img src={simpleUI} alt='' />
					<div className={styles.content}>
						<h2 className={styles.heading}>Simple UI & UX</h2>
						<p className={styles.tagline}>
							Our pre-built form is easy to integrate in your app or website's
							checkout flow and designed to optimize conversion.
						</p>
					</div>
				</div>

				<div className={styles.group}>
					<div className={styles.item}>
						<Finances className={styles.icon} />
						<h3>Personal Finances</h3>
						<p>
							Consolidate financial data from multiple sources and categorize
							transactions up to 2 years of history. Analyze reports to
							reconcile activities in your account.
						</p>
					</div>
					<div className={styles.item}>
						<Banking className={styles.icon} />
						<h3>Banking & Coverage</h3>
						<p>
							With our platform you can speed up account onboarding and support
							ongoing payments for checking, savings, credit card, and brokerage
							accounts.
						</p>
					</div>
					<div className={styles.item}>
						<Payments className={styles.icon} />
						<h3>Consumer Payments</h3>
						<p>
							It's easier to set up secure bank payments with us through a flow
							designed with the user experience in mind. Customers could
							instantly authenticate their account.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
