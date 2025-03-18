
const express = require('express')
import {handler9002} from "./handler9002";
const app = express()
app.get('/9002', handler9002)
app.listen(3000, () => {})
        