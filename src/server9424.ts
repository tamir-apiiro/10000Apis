
const express = require('express')
import {handler9424} from "./handler9424";
const app = express()
app.get('/9424', handler9424)
app.listen(3000, () => {})
        