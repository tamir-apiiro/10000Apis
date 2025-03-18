
const express = require('express')
import {handler7576} from "./handler7576";
const app = express()
app.get('/7576', handler7576)
app.listen(3000, () => {})
        