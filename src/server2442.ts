
const express = require('express')
import {handler2442} from "./handler2442";
const app = express()
app.get('/2442', handler2442)
app.listen(3000, () => {})
        