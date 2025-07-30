import { useState } from 'react'
import { Document, Page } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'  // Optional: for better rendering

const TermsAndConditions = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  return (
    <div>
      <Document
        file="/terms.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        loading="Loading PDF..."
      >
        <Page pageNumber={pageNumber} />
      </Document>

      <div style={{ marginTop: '1rem' }}>
        <button disabled={pageNumber <= 1} onClick={() => setPageNumber(pageNumber - 1)}>
          Previous
        </button>
        <span> Page {pageNumber} of {numPages} </span>
        <button disabled={pageNumber >= numPages} onClick={() => setPageNumber(pageNumber + 1)}>
          Next
        </button>
      </div>
    </div>
  )
}

export default TermsAndConditions;