import { useState } from 'react';

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState('');
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const generatePassword = () => {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const special = '!@#$%^&*()';
    let chars = '';

    if (includeUppercase) chars += upper;
    if (includeLowercase) chars += lower;
    if (includeNumbers) chars += numbers;
    if (includeSpecialChars) chars += special;

    if (chars.length === 0) {
      setPassword('Please select at least one character type');
      return;
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
  };

  return (
    <div className="bg-dark-bg min-h-screen flex flex-col items-center justify-center text-white p-4">
      <div className="p-4 max-w-lg w-full text-center">
        <h2 className="text-3xl font-bold mb-6">Password Generator</h2>
        <div className="flex flex-col mb-4">
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
              className="form-checkbox text-primary mr-2"
            />
            Include Uppercase Letters
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
              className="form-checkbox text-primary mr-2"
            />
            Include Lowercase Letters
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              className="form-checkbox text-primary mr-2"
            />
            Include Numbers
          </label>
          <label className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={includeSpecialChars}
              onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
              className="form-checkbox text-primary mr-2"
            />
            Include Special Characters
          </label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="border border-gray-700 bg-gray-800 text-white p-2 mb-6 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Password length"
            min={1}
          />
          <button
            onClick={generatePassword}
            className="bg-primary w-full py-2 rounded-md text-lg font-semibold transition duration-300 hover:bg-primary-hover"
          >
            Generate Password
          </button>
        </div>
        <p className="mt-4 font-mono bg-gray-800 p-4 rounded-md inline-block">{password}</p>
      </div>
    </div>
  );
};

export default PasswordGenerator;
