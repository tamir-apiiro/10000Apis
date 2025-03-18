
const express = require('express')
import {handler2536} from "./handler2536";
const app = express()
app.get('/2536', handler2536)
app.listen(3000, () => {})
        