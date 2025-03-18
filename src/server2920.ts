
const express = require('express')
import {handler2920} from "./handler2920";
const app = express()
app.get('/2920', handler2920)
app.listen(3000, () => {})
        