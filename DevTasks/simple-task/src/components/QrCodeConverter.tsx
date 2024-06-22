import { useState } from 'react';
//import QRCode from 'qrcode.react';

const QrCodeConverter = () => {
  const [text, setText] = useState('');

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Text to QR Code Converter</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 mb-4 w-full"
        placeholder="Enter text to convert"
      />
    </div>
  );
};

export default QrCodeConverter;
