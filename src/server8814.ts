
const express = require('express')
import {handler8814} from "./handler8814";
const app = express()
app.get('/8814', handler8814)
app.listen(3000, () => {})
        