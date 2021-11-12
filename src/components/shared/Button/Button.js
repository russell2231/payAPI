import styles from './Button.module.scss';

const Button = ({ children, primary, light, dark, demo, ...otherProps }) => {
	return (
		<button
			className={`${styles.btn} ${primary ? styles.primary : ''} ${
				light ? styles.light : ''
			} ${dark ? styles.dark : ''} ${demo ? styles.demo : ''}`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
