
const express = require('express')
import {handler2079} from "./handler2079";
const app = express()
app.get('/2079', handler2079)
app.listen(3000, () => {})
        