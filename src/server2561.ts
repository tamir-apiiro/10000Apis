
const express = require('express')
import {handler2561} from "./handler2561";
const app = express()
app.get('/2561', handler2561)
app.listen(3000, () => {})
        