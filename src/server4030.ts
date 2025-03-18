
const express = require('express')
import {handler4030} from "./handler4030";
const app = express()
app.get('/4030', handler4030)
app.listen(3000, () => {})
        