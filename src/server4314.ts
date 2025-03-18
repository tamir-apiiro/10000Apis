
const express = require('express')
import {handler4314} from "./handler4314";
const app = express()
app.get('/4314', handler4314)
app.listen(3000, () => {})
        