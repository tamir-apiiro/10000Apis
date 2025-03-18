
const express = require('express')
import {handler9125} from "./handler9125";
const app = express()
app.get('/9125', handler9125)
app.listen(3000, () => {})
        