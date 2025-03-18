
const express = require('express')
import {handler8941} from "./handler8941";
const app = express()
app.get('/8941', handler8941)
app.listen(3000, () => {})
        