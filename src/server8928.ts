
const express = require('express')
import {handler8928} from "./handler8928";
const app = express()
app.get('/8928', handler8928)
app.listen(3000, () => {})
        