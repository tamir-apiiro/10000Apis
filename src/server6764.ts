
const express = require('express')
import {handler6764} from "./handler6764";
const app = express()
app.get('/6764', handler6764)
app.listen(3000, () => {})
        