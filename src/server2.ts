
const express = require('express')
import {handler2} from "./handler2";
const app = express()
app.get('/2', handler2)
app.listen(3000, () => {})
        