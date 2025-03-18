
const express = require('express')
import {handler8435} from "./handler8435";
const app = express()
app.get('/8435', handler8435)
app.listen(3000, () => {})
        