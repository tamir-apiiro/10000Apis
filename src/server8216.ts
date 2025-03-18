
const express = require('express')
import {handler8216} from "./handler8216";
const app = express()
app.get('/8216', handler8216)
app.listen(3000, () => {})
        