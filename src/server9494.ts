
const express = require('express')
import {handler9494} from "./handler9494";
const app = express()
app.get('/9494', handler9494)
app.listen(3000, () => {})
        