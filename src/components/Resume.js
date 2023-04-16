import React, {useState} from 'react';
import { BsDownload } from 'react-icons/bs';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from './Sam Bensema - resume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume() {
    const [numPages, setNumPages] = useState(null);

    return (
        <div className='m-5 flex-column'>
            <div className='d-flex flex-wrap justify-content-center'>
                <a href={resume} download="Sam Bensema resume">
                    <button className='mb-3 p-2' type="button">
                        <h6>Download my Resume</h6>
                        <BsDownload />
                    </button>
                </a>
            </div>
            <Document file={resume} onLoadSuccess={({ numPages })=>setNumPages(numPages)} className="d-flex justify-content-center">
                {Array.apply(null, Array(numPages))
                    .map((x, i)=>i+1)
                    .map(page => <Page pageNumber={page}/>)}
            </Document>
        </div>
    );
}

export default Resume;