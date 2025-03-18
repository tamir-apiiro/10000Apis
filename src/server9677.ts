
const express = require('express')
import {handler9677} from "./handler9677";
const app = express()
app.get('/9677', handler9677)
app.listen(3000, () => {})
        