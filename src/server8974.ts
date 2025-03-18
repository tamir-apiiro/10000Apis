
const express = require('express')
import {handler8974} from "./handler8974";
const app = express()
app.get('/8974', handler8974)
app.listen(3000, () => {})
        