/**
 * @module helpers/ DownloadPDF
 */

/** Иконка PDF */
import PdfIcon from '../../assets/react.svg';
/** Css модуль */
import styles_modul from './DownloadPDF.module.css';
// import { useState } from 'react';
import MyWorker from './pdf_worker?worker';

/**
 * Компонент для генерации PDF файла и открытия его в новом окне браузера
 * @param {Object[]} diff_data Массив изменённых объектов
 * @returns {JSXElement}
 */

export function DownloadPDF({ ...props }) {
	const worker = new MyWorker();

	worker.addEventListener(
		'message',
		function (e) {
			console.log(e.data);
			console.timeEnd('local');
		},
		false,
	);

	return (
		<>
			<PdfIcon
				className={styles_modul.block}
				{...props}
				onClick={() => {
					console.log('click');
					console.time('local');
					worker.postMessage({ cmd: 'message', data: 'START' });
				}}
			/>
		</>
	);
}
