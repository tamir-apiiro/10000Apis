
const express = require('express')
import {handler2016} from "./handler2016";
const app = express()
app.get('/2016', handler2016)
app.listen(3000, () => {})
        