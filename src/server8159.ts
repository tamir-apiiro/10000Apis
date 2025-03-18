
const express = require('express')
import {handler8159} from "./handler8159";
const app = express()
app.get('/8159', handler8159)
app.listen(3000, () => {})
        