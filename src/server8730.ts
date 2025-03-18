
const express = require('express')
import {handler8730} from "./handler8730";
const app = express()
app.get('/8730', handler8730)
app.listen(3000, () => {})
        