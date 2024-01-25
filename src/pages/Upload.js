import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';
import * as IoIcons from 'react-icons/io';
import './Upload.css';

const ExcelUploader = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [excelData, setExcelData] = useState(null);
  const [fileName, setFileName] = useState('');
  const [isUploadButtonDisabled, setUploadButtonDisabled] = useState(true);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      setExcelData(jsonData);
      setUploadButtonDisabled(false);
    };

    reader.readAsArrayBuffer(file);
  };

  const removeFile = () => {
    setExcelData(null);
    setFileName('');
    setUploadButtonDisabled(true);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const initialRowsState = [1, 2, 3, 4, 5].map(() => []);
  const [rowsSelectedTags, setRowsSelectedTags] = useState(initialRowsState);

  const handleTagSelectForRow = (tag, rowIndex) => {
    const newSelectedTags = [...rowsSelectedTags];
    if (!newSelectedTags[rowIndex].includes(tag)) {
      newSelectedTags[rowIndex] = [...newSelectedTags[rowIndex], tag];
      setRowsSelectedTags(newSelectedTags);
    }
  };

  const handleTagRemoveForRow = (index, rowIndex) => {
    const newSelectedTags = [...rowsSelectedTags];
    newSelectedTags[rowIndex].splice(index, 1);
    setRowsSelectedTags(newSelectedTags);
  };

  return (
    <>
    <Navbar />
    <div className='upload'>
      <div>
        <p className='head'>Upload CSV</p>
      </div>
      <div className='form-upload'>
        <div style={dropzoneStyle} className='form-border'>
          <img
            className='exc'
            src='https://w7.pngwing.com/pngs/162/301/png-transparent-microsoft-excel-logo.png'
            alt='excel'
            height='36px'
            width='50px'
          ></img>
          <p {...getRootProps()}>
            Drop your Excel file here or <p className='bro'>browse</p>
          </p>
          <input {...getInputProps()} />
          {excelData && (
            <div>
              <p>File: {fileName}</p>
              <p className='btn-remove' onClick={removeFile}>
                Remove
              </p>
            </div>
          )}
        </div>
        <button
          onClick={() => console.log('Upload logic goes here')}
          disabled={isUploadButtonDisabled}
          className='btn-upload'
        >
          <IoIcons.IoIosArrowRoundUp style={{ color: 'white', height: '20px', width: '20px' }} />
          Upload
        </button>
      </div>

      {/* Added table */}
      <table className='table'>
        <thead>
          <tr>
            <th className='sno'>S.No</th>
            <th className='link'>Link</th>
            <th className='prefix'>Prefix</th>
            <th className='addTag'>Add Tags</th>
            <th className='tags'>Selected Tags</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map((rowNumber, rowIndex) => (
            <tr key={rowNumber}>
              <td>0{rowNumber}</td>
              <td><a href="#">www.google.com</a></td>
              <td>prefixSample</td>
              <td>
                <select onChange={(e) => handleTagSelectForRow(e.target.value, rowIndex)} className='drop-down'>
                <option value="Select Tag">Select Tags</option>
                  <option value="Tag 1">Tag 1</option>
                  <option value="Tag 2">Tag 2</option>
                  <option value="Tag 3">Tag 3</option>
                  <option value="Tag 4">Tag 4</option>
                  <option value="Tag 5">Tag 5</option>
                </select>
              </td>
              <td className='s-tag'>
                <ul>
                  {rowsSelectedTags[rowIndex].map((tag, index) => (
                    <li key={index}>
                      {tag} <span onClick={() => handleTagRemoveForRow(index, rowIndex)}>X</span>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

const dropzoneStyle = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default ExcelUploader;
