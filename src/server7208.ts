
const express = require('express')
import {handler7208} from "./handler7208";
const app = express()
app.get('/7208', handler7208)
app.listen(3000, () => {})
        