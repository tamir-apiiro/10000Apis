
const express = require('express')
import {handler2427} from "./handler2427";
const app = express()
app.get('/2427', handler2427)
app.listen(3000, () => {})
        