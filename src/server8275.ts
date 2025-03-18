
const express = require('express')
import {handler8275} from "./handler8275";
const app = express()
app.get('/8275', handler8275)
app.listen(3000, () => {})
        