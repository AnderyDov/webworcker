/**
 * @module helpers/ DownloadPDF
 */

/** Иконка PDF */
import PdfIcon from '../../assets/react.svg';
/** Css модуль */
import styles from './DownloadPDF.module.css';
import { useState } from 'react';
import MyWorker from './pdf_worker?worker';
import cn from 'classnames';

/**
 * Компонент для генерации PDF файла и открытия его в новом окне браузера
 * @param {Object[]} diff_data Массив изменённых объектов
 * @returns {JSXElement}
 */

export function DownloadPDF({ ...props }) {
	const [dis, setDis] = useState(false);

	const worker = new MyWorker();

	worker.addEventListener(
		'message',
		function (e) {
			if (e.data.data == 'END') {
				setDis(false);
				console.log('END');
				return;
			}
			let file = new File(e.data, 'WebWorker.pdf', {
				type: 'application/pdf',
			});

			let link = document.createElement('a');
			link.download = file.name;

			link.href = URL.createObjectURL(file);
			link.click();
			URL.revokeObjectURL(link.href);
		},
		false,
	);

	return (
		<>
			<PdfIcon
				className={cn(styles.block, { [styles.disabled]: dis })}
				{...props}
				onClick={() => {
					console.log('click');
					setDis(true);
					worker.postMessage({ cmd: 'message', data: 'START' });
				}}
				disabled={true}
			/>
		</>
	);
}
