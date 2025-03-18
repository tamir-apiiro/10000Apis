
const express = require('express')
import {handler2491} from "./handler2491";
const app = express()
app.get('/2491', handler2491)
app.listen(3000, () => {})
        