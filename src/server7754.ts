
const express = require('express')
import {handler7754} from "./handler7754";
const app = express()
app.get('/7754', handler7754)
app.listen(3000, () => {})
        