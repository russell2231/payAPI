import Callout from '../shared/Callout/Callout';
import { ReactComponent as BgCircle } from '../../assets/shared/desktop/bg-pattern-circle.svg';
import { ReactComponent as Tesla } from '../../assets/shared/desktop/tesla.svg';
import { ReactComponent as Microsoft } from '../../assets/shared/desktop/microsoft.svg';
import { ReactComponent as Hp } from '../../assets/shared/desktop/hewlett-packard.svg';
import { ReactComponent as Oracle } from '../../assets/shared/desktop/oracle.svg';
import { ReactComponent as Google } from '../../assets/shared/desktop/google.svg';
import { ReactComponent as Nvidia } from '../../assets/shared/desktop/nvidia.svg';
import styles from './Contact.module.scss';
import Form from './Form/Form';

const Contact = () => {
	return (
		<main className={styles.contact}>
			<BgCircle className={styles.bgCircle} />
			<div className={styles.container}>
				<h1 className={styles.title}>
					Submit a help request and we'll get in touch shortly.
				</h1>
				<div className={styles.group}>
					<Form />
					<div className={styles.join}>
						<h2>Join the thousands of innovators already building with us</h2>
						<div className={styles.companies}>
							<Tesla className={styles.company} />
							<Microsoft className={styles.company} />
							<Hp className={styles.company} />
							<Oracle className={styles.company} />
							<Google className={styles.company} />
							<Nvidia className={styles.company} />
						</div>
					</div>
				</div>
			</div>
			<Callout />
		</main>
	);
};

export default Contact;
