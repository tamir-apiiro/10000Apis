
const express = require('express')
import {handler2159} from "./handler2159";
const app = express()
app.get('/2159', handler2159)
app.listen(3000, () => {})
        