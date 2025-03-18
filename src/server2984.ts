
const express = require('express')
import {handler2984} from "./handler2984";
const app = express()
app.get('/2984', handler2984)
app.listen(3000, () => {})
        