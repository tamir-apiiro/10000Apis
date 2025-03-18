
const express = require('express')
import {handler3051} from "./handler3051";
const app = express()
app.get('/3051', handler3051)
app.listen(3000, () => {})
        