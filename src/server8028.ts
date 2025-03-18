
const express = require('express')
import {handler8028} from "./handler8028";
const app = express()
app.get('/8028', handler8028)
app.listen(3000, () => {})
        