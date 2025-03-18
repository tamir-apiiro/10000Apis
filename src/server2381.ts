
const express = require('express')
import {handler2381} from "./handler2381";
const app = express()
app.get('/2381', handler2381)
app.listen(3000, () => {})
        