
const express = require('express')
import {handler7178} from "./handler7178";
const app = express()
app.get('/7178', handler7178)
app.listen(3000, () => {})
        