
const express = require('express')
import {handler9027} from "./handler9027";
const app = express()
app.get('/9027', handler9027)
app.listen(3000, () => {})
        