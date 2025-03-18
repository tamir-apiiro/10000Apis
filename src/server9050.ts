
const express = require('express')
import {handler9050} from "./handler9050";
const app = express()
app.get('/9050', handler9050)
app.listen(3000, () => {})
        