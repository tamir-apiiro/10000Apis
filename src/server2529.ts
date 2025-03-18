
const express = require('express')
import {handler2529} from "./handler2529";
const app = express()
app.get('/2529', handler2529)
app.listen(3000, () => {})
        