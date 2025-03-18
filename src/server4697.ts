
const express = require('express')
import {handler4697} from "./handler4697";
const app = express()
app.get('/4697', handler4697)
app.listen(3000, () => {})
        