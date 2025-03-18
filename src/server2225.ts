
const express = require('express')
import {handler2225} from "./handler2225";
const app = express()
app.get('/2225', handler2225)
app.listen(3000, () => {})
        