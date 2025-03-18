
const express = require('express')
import {handler4371} from "./handler4371";
const app = express()
app.get('/4371', handler4371)
app.listen(3000, () => {})
        