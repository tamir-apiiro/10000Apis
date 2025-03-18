
const express = require('express')
import {handler2139} from "./handler2139";
const app = express()
app.get('/2139', handler2139)
app.listen(3000, () => {})
        