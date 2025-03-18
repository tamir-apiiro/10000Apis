
const express = require('express')
import {handler4002} from "./handler4002";
const app = express()
app.get('/4002', handler4002)
app.listen(3000, () => {})
        