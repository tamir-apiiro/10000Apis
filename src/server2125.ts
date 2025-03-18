
const express = require('express')
import {handler2125} from "./handler2125";
const app = express()
app.get('/2125', handler2125)
app.listen(3000, () => {})
        