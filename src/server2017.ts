
const express = require('express')
import {handler2017} from "./handler2017";
const app = express()
app.get('/2017', handler2017)
app.listen(3000, () => {})
        