
const express = require('express')
import {handler401} from "./handler401";
const app = express()
app.get('/401', handler401)
app.listen(3000, () => {})
        