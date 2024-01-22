import { useEffect } from 'react';
import useAuth from '../../hook/useAuth';

const Home = () => {
	const { login } = useAuth();

	useEffect(() => {
		login({
			email: 'eduardo@gmail.com',
			password: 'Qwerty1#!',
		});
	}, []);

	return <div>Home</div>;
};

export default Home;
