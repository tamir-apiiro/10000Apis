
const express = require('express')
import {handler2777} from "./handler2777";
const app = express()
app.get('/2777', handler2777)
app.listen(3000, () => {})
        