
const express = require('express')
import {handler2004} from "./handler2004";
const app = express()
app.get('/2004', handler2004)
app.listen(3000, () => {})
        