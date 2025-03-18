
const express = require('express')
import {handler2022} from "./handler2022";
const app = express()
app.get('/2022', handler2022)
app.listen(3000, () => {})
        