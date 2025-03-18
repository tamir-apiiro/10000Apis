
const express = require('express')
import {handler8519} from "./handler8519";
const app = express()
app.get('/8519', handler8519)
app.listen(3000, () => {})
        