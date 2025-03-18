
const express = require('express')
import {handler8769} from "./handler8769";
const app = express()
app.get('/8769', handler8769)
app.listen(3000, () => {})
        