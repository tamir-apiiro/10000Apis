
const express = require('express')
import {handler7670} from "./handler7670";
const app = express()
app.get('/7670', handler7670)
app.listen(3000, () => {})
        