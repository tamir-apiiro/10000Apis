
const express = require('express')
import {handler2060} from "./handler2060";
const app = express()
app.get('/2060', handler2060)
app.listen(3000, () => {})
        