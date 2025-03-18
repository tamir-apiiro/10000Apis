
const express = require('express')
import {handler2109} from "./handler2109";
const app = express()
app.get('/2109', handler2109)
app.listen(3000, () => {})
        