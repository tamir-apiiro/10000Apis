
const express = require('express')
import {handler2167} from "./handler2167";
const app = express()
app.get('/2167', handler2167)
app.listen(3000, () => {})
        