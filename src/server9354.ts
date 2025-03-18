
const express = require('express')
import {handler9354} from "./handler9354";
const app = express()
app.get('/9354', handler9354)
app.listen(3000, () => {})
        