
const express = require('express')
import {handler9182} from "./handler9182";
const app = express()
app.get('/9182', handler9182)
app.listen(3000, () => {})
        