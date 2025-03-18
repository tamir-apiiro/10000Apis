
const express = require('express')
import {handler8542} from "./handler8542";
const app = express()
app.get('/8542', handler8542)
app.listen(3000, () => {})
        