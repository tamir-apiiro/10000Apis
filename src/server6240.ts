
const express = require('express')
import {handler6240} from "./handler6240";
const app = express()
app.get('/6240', handler6240)
app.listen(3000, () => {})
        