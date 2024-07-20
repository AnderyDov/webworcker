import styles from './App.module.css';
import { DownloadPDF } from './components/DownloadPDF/DownloadPDF';
/** Иконка PDF */
import PdfIcon from './assets/react.svg';

function App() {
	return (
		<div className={styles.block}>
			<h2>Web Worler React</h2>
			<PdfIcon className={styles.icon} />
			<DownloadPDF />
		</div>
	);
}

export default App;
