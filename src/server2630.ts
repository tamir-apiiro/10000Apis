
const express = require('express')
import {handler2630} from "./handler2630";
const app = express()
app.get('/2630', handler2630)
app.listen(3000, () => {})
        