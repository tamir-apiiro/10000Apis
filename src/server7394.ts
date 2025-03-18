
const express = require('express')
import {handler7394} from "./handler7394";
const app = express()
app.get('/7394', handler7394)
app.listen(3000, () => {})
        