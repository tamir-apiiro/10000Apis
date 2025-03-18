
const express = require('express')
import {handler8654} from "./handler8654";
const app = express()
app.get('/8654', handler8654)
app.listen(3000, () => {})
        