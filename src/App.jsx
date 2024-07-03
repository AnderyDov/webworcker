import styles from './App.module.css';
import { DownloadPDF } from './components/DownloadPDF/DownloadPDF';

function App() {
	return (
		<div className={styles.block}>
			<h2>Web Worler React</h2>

			<DownloadPDF />
		</div>
	);
}

export default App;
