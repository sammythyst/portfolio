import React, {useState} from 'react';
import { BsDownload } from 'react-icons/bs';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from './test-resume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume() {
    const [pageNumber] = useState(1);


    return (
        <div className='m-5 flex-column'>
            <div className='d-flex flex-wrap justify-content-center'>
                <a href={resume} download="Sam Bensema resume">
                    <button className='mb-3 px-4 py-2' type="button">
                        <h6>Download PDF</h6>
                        < BsDownload />
                    </button>
                </a>
            </div>
            <Document file={resume} className="d-flex justify-content-center">
                <Page pageNumber={pageNumber} className="mb-5" scale={1.5}/>
            </Document>
        </div>
    );
}

export default Resume;