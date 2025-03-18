
const express = require('express')
import {handler2269} from "./handler2269";
const app = express()
app.get('/2269', handler2269)
app.listen(3000, () => {})
        