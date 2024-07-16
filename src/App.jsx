import styles from './App.module.css';
import { DownloadPDF } from './components/DownloadPDF/DownloadPDF';
import { IdlCallback } from './components/IdlCallback/IdlCallback';
/** Иконка PDF */
import PdfIcon from './assets/react.svg';

function App() {
	return (
		<div className={styles.block}>
			<h2>Web Worler React</h2>
			<PdfIcon className={styles.icon} />
			<DownloadPDF />
			<IdlCallback />
		</div>
	);
}

export default App;
