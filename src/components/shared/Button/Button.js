import styles from './Button.module.scss';

const Button = ({ children, primary, demo, ...otherProps }) => {
	return (
		<button
			className={`${styles.btn} ${primary ? styles.primary : ''} ${
				demo ? styles.demo : ''
			}`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
