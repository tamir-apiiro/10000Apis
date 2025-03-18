
const express = require('express')
import {handler2714} from "./handler2714";
const app = express()
app.get('/2714', handler2714)
app.listen(3000, () => {})
        