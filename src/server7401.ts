
const express = require('express')
import {handler7401} from "./handler7401";
const app = express()
app.get('/7401', handler7401)
app.listen(3000, () => {})
        