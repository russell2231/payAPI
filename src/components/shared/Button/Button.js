import styles from './Button.module.scss';

const Button = ({ children, primary, light, demo, ...otherProps }) => {
	return (
		<button
			className={`${styles.btn} ${primary ? styles.primary : ''} ${
				light ? styles.light : ''
			} ${demo ? styles.demo : ''}`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
