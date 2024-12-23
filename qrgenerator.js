const QRCode = require('qrcode');

// URL to be converted to a QR code
const url = 'https://example.com';

// Generate QR Code and log it as a string (ASCII)
QRCode.toString(url, { type: 'terminal' }, (err, urlAscii) => {
  if (err) {
    console.error('Error generating QR Code:', err);
    return;
  }
  console.log('QR Code as ASCII:');
  console.log(urlAscii);
});

// Generate QR Code and save it as an image file
QRCode.toFile('qrcode.png', url, (err) => {
  if (err) {
    console.error('Error saving QR Code:', err);
    return;
  }
  console.log('QR Code saved as qrcode.png');
});
