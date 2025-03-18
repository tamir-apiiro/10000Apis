
const express = require('express')
import {handler8906} from "./handler8906";
const app = express()
app.get('/8906', handler8906)
app.listen(3000, () => {})
        