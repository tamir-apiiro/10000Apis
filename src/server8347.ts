
const express = require('express')
import {handler8347} from "./handler8347";
const app = express()
app.get('/8347', handler8347)
app.listen(3000, () => {})
        