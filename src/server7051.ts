
const express = require('express')
import {handler7051} from "./handler7051";
const app = express()
app.get('/7051', handler7051)
app.listen(3000, () => {})
        