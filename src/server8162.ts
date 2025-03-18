
const express = require('express')
import {handler8162} from "./handler8162";
const app = express()
app.get('/8162', handler8162)
app.listen(3000, () => {})
        