
const express = require('express')
import {handler16} from "./handler16";
const app = express()
app.get('/16', handler16)
app.listen(3000, () => {})
        