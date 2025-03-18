
const express = require('express')
import {handler2988} from "./handler2988";
const app = express()
app.get('/2988', handler2988)
app.listen(3000, () => {})
        