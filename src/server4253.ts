
const express = require('express')
import {handler4253} from "./handler4253";
const app = express()
app.get('/4253', handler4253)
app.listen(3000, () => {})
        