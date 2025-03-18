
const express = require('express')
import {handler9824} from "./handler9824";
const app = express()
app.get('/9824', handler9824)
app.listen(3000, () => {})
        