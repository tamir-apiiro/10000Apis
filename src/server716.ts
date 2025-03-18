
const express = require('express')
import {handler716} from "./handler716";
const app = express()
app.get('/716', handler716)
app.listen(3000, () => {})
        