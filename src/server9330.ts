
const express = require('express')
import {handler9330} from "./handler9330";
const app = express()
app.get('/9330', handler9330)
app.listen(3000, () => {})
        