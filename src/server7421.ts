
const express = require('express')
import {handler7421} from "./handler7421";
const app = express()
app.get('/7421', handler7421)
app.listen(3000, () => {})
        