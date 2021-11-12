import { ReactComponent as BgCircle } from '../../assets/shared/desktop/bg-pattern-circle.svg';
import Callout from '../shared/Callout/Callout';
import Plans from './Plans/Plans';
import styles from './Pricing.module.scss';

const Pricing = () => {
	return (
		<main className={styles.pricing}>
			<BgCircle className={styles.bgCircle} />
			<h1>Pricing</h1>
			<Plans />
			<Callout />
		</main>
	);
};

export default Pricing;
