import { useState } from 'react';
import QRCode from 'react-qr-code';

const QrCodeConverter = () => {
  const [text, setText] = useState('');

  return (
    <div className="bg-dark-bg min-h-screen flex flex-col items-center justify-center text-white p-4">
      <div className="p-4 max-w-lg w-full text-center">
        <h2 className="text-3xl font-bold mb-6">Text to QR Code Converter</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-gray-700 bg-gray-800 text-white p-2 mb-6 w-full rounded-md"
          placeholder="Enter text to convert"
        />
        {text ? (
          <div className="bg-gray-800 p-6 rounded-md inline-block">
            <QRCode value={text} size={256} />
          </div>
        ) : (
          <p className="text-gray-500">Enter some text to generate a QR code.</p>
        )}
      </div>
    </div>
  );
};

export default QrCodeConverter;
