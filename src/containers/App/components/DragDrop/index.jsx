/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const dragdrop = {
  border: '1px dashed black'
};

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  marginBottom: 8,
  marginRight: 8,
  width: '65%',
  height: '65%',
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  margin: 'auto',
  width: 'auto',
  height: '100%'
};

const DragDrop = () => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        }))
      );
    }
  });

  const thumbs = files.map(file => (
    <div style={ thumb } key={ file.name }>
      <div style={ thumbInner }>
        <img src={ file.preview } style={ img } />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section>
      <div { ...getRootProps() } style={ dragdrop }>
        <input { ...getInputProps() } />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <aside style={ thumbsContainer }>{ thumbs }</aside>
      </div>
    </section>
  );
};

export default DragDrop;
