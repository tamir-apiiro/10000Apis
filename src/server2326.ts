
const express = require('express')
import {handler2326} from "./handler2326";
const app = express()
app.get('/2326', handler2326)
app.listen(3000, () => {})
        