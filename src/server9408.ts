
const express = require('express')
import {handler9408} from "./handler9408";
const app = express()
app.get('/9408', handler9408)
app.listen(3000, () => {})
        