
const express = require('express')
import {handler2051} from "./handler2051";
const app = express()
app.get('/2051', handler2051)
app.listen(3000, () => {})
        