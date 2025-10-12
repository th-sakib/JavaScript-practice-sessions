import os from "os";

// This will help view details of netwrork interfaces in this device
const networkInterface = os.networkInterfaces();
console.log(networkInterface);
