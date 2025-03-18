
const express = require('express')
import {handler8560} from "./handler8560";
const app = express()
app.get('/8560', handler8560)
app.listen(3000, () => {})
        