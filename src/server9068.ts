
const express = require('express')
import {handler9068} from "./handler9068";
const app = express()
app.get('/9068', handler9068)
app.listen(3000, () => {})
        