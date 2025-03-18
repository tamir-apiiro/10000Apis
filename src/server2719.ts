
const express = require('express')
import {handler2719} from "./handler2719";
const app = express()
app.get('/2719', handler2719)
app.listen(3000, () => {})
        