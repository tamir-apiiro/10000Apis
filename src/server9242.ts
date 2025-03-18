
const express = require('express')
import {handler9242} from "./handler9242";
const app = express()
app.get('/9242', handler9242)
app.listen(3000, () => {})
        