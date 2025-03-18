
const express = require('express')
import {handler2585} from "./handler2585";
const app = express()
app.get('/2585', handler2585)
app.listen(3000, () => {})
        