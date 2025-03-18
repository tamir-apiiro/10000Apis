
const express = require('express')
import {handler8372} from "./handler8372";
const app = express()
app.get('/8372', handler8372)
app.listen(3000, () => {})
        