
const express = require('express')
import {handler7342} from "./handler7342";
const app = express()
app.get('/7342', handler7342)
app.listen(3000, () => {})
        