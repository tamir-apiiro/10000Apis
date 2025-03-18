
const express = require('express')
import {handler9950} from "./handler9950";
const app = express()
app.get('/9950', handler9950)
app.listen(3000, () => {})
        