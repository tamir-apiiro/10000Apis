
const express = require('express')
import {handler7240} from "./handler7240";
const app = express()
app.get('/7240', handler7240)
app.listen(3000, () => {})
        