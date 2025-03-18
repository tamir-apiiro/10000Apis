
const express = require('express')
import {handler8508} from "./handler8508";
const app = express()
app.get('/8508', handler8508)
app.listen(3000, () => {})
        