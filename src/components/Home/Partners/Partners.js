import Button from '../../shared/Button/Button';
import { ReactComponent as Tesla } from '../../../assets/shared/desktop/tesla.svg';
import { ReactComponent as Microsoft } from '../../../assets/shared/desktop/microsoft.svg';
import { ReactComponent as Hp } from '../../../assets/shared/desktop/hewlett-packard.svg';
import { ReactComponent as Oracle } from '../../../assets/shared/desktop/oracle.svg';
import { ReactComponent as Google } from '../../../assets/shared/desktop/google.svg';
import { ReactComponent as Nvidia } from '../../../assets/shared/desktop/nvidia.svg';
import styles from './Partners.module.scss';

const Partners = () => {
	return (
		<section className={styles.partners}>
			<div className={styles.container}>
				<div className={styles.companies}>
					<Tesla className={styles.company} />
					<Microsoft className={styles.company} />
					<Hp className={styles.company} />
					<Oracle className={styles.company} />
					<Google className={styles.company} />
					<Nvidia className={styles.company} />
				</div>
				<div className={styles.content}>
					<h2 className={styles.heading}>Who we work with</h2>
					<p className={styles.tagline}>
						Today, millions of people around the world have successfully
						connected their accounts to apps they love using our API. We provide
						developers with the tools they need to create easy and accessible
						experiences for their users.
					</p>
					<Button light>About Us</Button>
				</div>
			</div>
		</section>
	);
};

export default Partners;
