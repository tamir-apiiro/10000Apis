
const express = require('express')
import {handler2361} from "./handler2361";
const app = express()
app.get('/2361', handler2361)
app.listen(3000, () => {})
        