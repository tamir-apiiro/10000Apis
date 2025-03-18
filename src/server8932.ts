
const express = require('express')
import {handler8932} from "./handler8932";
const app = express()
app.get('/8932', handler8932)
app.listen(3000, () => {})
        