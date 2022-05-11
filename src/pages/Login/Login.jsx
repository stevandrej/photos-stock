import Button from 'components/Button/Button';
import InputTextField from 'components/InputTextField/InputTextField';
import styles from './Login.module.css';

const Login = () => {
	const handleSubmit = () => {
		localStorage.setItem('token', '1234');
	};

	return (
		<>
			<div className={styles.container}>
				<header className={styles.header}>
					<h1 className={styles.h1}>Join our stock community!</h1>
					<p className={styles.subHeading}>
						Download free photos and videos powered by the best
						photographers.
					</p>
				</header>
				<form className={styles.form} onSubmit={handleSubmit}>
					<InputTextField
						label="USERNAME"
						id="username"
						placeholder="Enter username here..."
					/>
					<InputTextField
						label="PASSWORD"
						id="password"
						placeholder="Enter password here..."
					/>
					<Button variant="primary" type="submit">
						Log in
					</Button>
				</form>
			</div>
		</>
	);
};

export default Login;
