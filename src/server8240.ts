
const express = require('express')
import {handler8240} from "./handler8240";
const app = express()
app.get('/8240', handler8240)
app.listen(3000, () => {})
        