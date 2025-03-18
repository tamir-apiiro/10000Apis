
const express = require('express')
import {handler7133} from "./handler7133";
const app = express()
app.get('/7133', handler7133)
app.listen(3000, () => {})
        