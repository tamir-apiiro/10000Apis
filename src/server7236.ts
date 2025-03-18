
const express = require('express')
import {handler7236} from "./handler7236";
const app = express()
app.get('/7236', handler7236)
app.listen(3000, () => {})
        