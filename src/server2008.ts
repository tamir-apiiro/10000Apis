
const express = require('express')
import {handler2008} from "./handler2008";
const app = express()
app.get('/2008', handler2008)
app.listen(3000, () => {})
        