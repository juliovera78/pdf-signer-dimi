/*const verifyPDF = require('./verifyPDF');
const { getCertificatesInfoFromPDF } = require('./certificateDetails');

Object.assign(verifyPDF, { getCertificatesInfoFromPDF });

module.exports = verifyPDF; */

const fs = require("fs");
const path = require("path");

const verifyPDF = require('pdf-signature-reader');
//const signedPdfBuffer = fs.readFileSync('./SUTE227000014720202300000_20240710121828652_firmado (2).pdf');
const signedPdfBuffer = fs.readFileSync('./18cc07e4-246e-4a47-8788-2acd62e6b4b7.pdf');
const {
    verified,
    authenticity,
    integrity,
    expired,
    signatures
} = verifyPDF(signedPdfBuffer);
console.log(verifyPDF(signedPdfBuffer));