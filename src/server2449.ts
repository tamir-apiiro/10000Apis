
const express = require('express')
import {handler2449} from "./handler2449";
const app = express()
app.get('/2449', handler2449)
app.listen(3000, () => {})
        