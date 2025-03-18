
const express = require('express')
import {handler2557} from "./handler2557";
const app = express()
app.get('/2557', handler2557)
app.listen(3000, () => {})
        