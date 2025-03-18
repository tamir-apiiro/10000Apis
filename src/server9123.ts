
const express = require('express')
import {handler9123} from "./handler9123";
const app = express()
app.get('/9123', handler9123)
app.listen(3000, () => {})
        