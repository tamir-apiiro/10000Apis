
const express = require('express')
import {handler8823} from "./handler8823";
const app = express()
app.get('/8823', handler8823)
app.listen(3000, () => {})
        