
const express = require('express')
import {handler2716} from "./handler2716";
const app = express()
app.get('/2716', handler2716)
app.listen(3000, () => {})
        