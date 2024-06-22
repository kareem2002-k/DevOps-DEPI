import { useState } from 'react';

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Password Generator</h2>
      <input
        type="number"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        className="border p-2 mb-4 w-full"
        placeholder="Password length"
      />
      <button onClick={generatePassword} className="bg-blue-500 text-white p-2 rounded">
        Generate Password
      </button>
      <p className="mt-4 font-mono">{password}</p>
    </div>
  );
};

export default PasswordGenerator;
