
const express = require('express')
import {handler2245} from "./handler2245";
const app = express()
app.get('/2245', handler2245)
app.listen(3000, () => {})
        