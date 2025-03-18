
const express = require('express')
import {handler7563} from "./handler7563";
const app = express()
app.get('/7563', handler7563)
app.listen(3000, () => {})
        