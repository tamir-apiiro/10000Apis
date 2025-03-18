
const express = require('express')
import {handler9377} from "./handler9377";
const app = express()
app.get('/9377', handler9377)
app.listen(3000, () => {})
        