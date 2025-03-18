
const express = require('express')
import {handler9070} from "./handler9070";
const app = express()
app.get('/9070', handler9070)
app.listen(3000, () => {})
        