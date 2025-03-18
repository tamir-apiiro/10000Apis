
const express = require('express')
import {handler7944} from "./handler7944";
const app = express()
app.get('/7944', handler7944)
app.listen(3000, () => {})
        