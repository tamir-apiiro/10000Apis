
const express = require('express')
import {handler4423} from "./handler4423";
const app = express()
app.get('/4423', handler4423)
app.listen(3000, () => {})
        