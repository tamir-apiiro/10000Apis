
const express = require('express')
import {handler7933} from "./handler7933";
const app = express()
app.get('/7933', handler7933)
app.listen(3000, () => {})
        