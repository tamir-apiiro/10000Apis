
const express = require('express')
import {handler8226} from "./handler8226";
const app = express()
app.get('/8226', handler8226)
app.listen(3000, () => {})
        