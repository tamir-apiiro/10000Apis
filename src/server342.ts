
const express = require('express')
import {handler342} from "./handler342";
const app = express()
app.get('/342', handler342)
app.listen(3000, () => {})
        