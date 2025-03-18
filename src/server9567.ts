
const express = require('express')
import {handler9567} from "./handler9567";
const app = express()
app.get('/9567', handler9567)
app.listen(3000, () => {})
        