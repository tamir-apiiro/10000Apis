
const express = require('express')
import {handler9329} from "./handler9329";
const app = express()
app.get('/9329', handler9329)
app.listen(3000, () => {})
        