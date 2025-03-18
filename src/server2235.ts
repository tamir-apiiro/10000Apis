
const express = require('express')
import {handler2235} from "./handler2235";
const app = express()
app.get('/2235', handler2235)
app.listen(3000, () => {})
        