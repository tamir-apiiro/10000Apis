
const express = require('express')
import {handler2635} from "./handler2635";
const app = express()
app.get('/2635', handler2635)
app.listen(3000, () => {})
        