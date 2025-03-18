
const express = require('express')
import {handler8499} from "./handler8499";
const app = express()
app.get('/8499', handler8499)
app.listen(3000, () => {})
        