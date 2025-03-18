
const express = require('express')
import {handler9203} from "./handler9203";
const app = express()
app.get('/9203', handler9203)
app.listen(3000, () => {})
        