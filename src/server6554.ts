
const express = require('express')
import {handler6554} from "./handler6554";
const app = express()
app.get('/6554', handler6554)
app.listen(3000, () => {})
        