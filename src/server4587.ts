
const express = require('express')
import {handler4587} from "./handler4587";
const app = express()
app.get('/4587', handler4587)
app.listen(3000, () => {})
        