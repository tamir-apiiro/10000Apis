
const express = require('express')
import {handler2702} from "./handler2702";
const app = express()
app.get('/2702', handler2702)
app.listen(3000, () => {})
        