
const express = require('express')
import {handler946} from "./handler946";
const app = express()
app.get('/946', handler946)
app.listen(3000, () => {})
        