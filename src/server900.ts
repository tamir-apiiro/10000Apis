
const express = require('express')
import {handler900} from "./handler900";
const app = express()
app.get('/900', handler900)
app.listen(3000, () => {})
        