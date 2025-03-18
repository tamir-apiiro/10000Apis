
const express = require('express')
import {handler8006} from "./handler8006";
const app = express()
app.get('/8006', handler8006)
app.listen(3000, () => {})
        