
const express = require('express')
import {handler314} from "./handler314";
const app = express()
app.get('/314', handler314)
app.listen(3000, () => {})
        