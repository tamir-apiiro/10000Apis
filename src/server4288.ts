
const express = require('express')
import {handler4288} from "./handler4288";
const app = express()
app.get('/4288', handler4288)
app.listen(3000, () => {})
        