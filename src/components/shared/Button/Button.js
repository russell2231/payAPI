import styles from './Button.module.scss';

const Button = ({ children, primary, ...otherProps }) => {
	return (
		<button
			className={`${styles.btn} ${primary ? styles.primary : ''}`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
