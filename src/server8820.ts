
const express = require('express')
import {handler8820} from "./handler8820";
const app = express()
app.get('/8820', handler8820)
app.listen(3000, () => {})
        