
const express = require('express')
import {handler7784} from "./handler7784";
const app = express()
app.get('/7784', handler7784)
app.listen(3000, () => {})
        