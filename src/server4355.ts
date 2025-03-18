
const express = require('express')
import {handler4355} from "./handler4355";
const app = express()
app.get('/4355', handler4355)
app.listen(3000, () => {})
        