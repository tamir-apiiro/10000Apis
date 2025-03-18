
const express = require('express')
import {handler9255} from "./handler9255";
const app = express()
app.get('/9255', handler9255)
app.listen(3000, () => {})
        