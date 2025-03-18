
const express = require('express')
import {handler2589} from "./handler2589";
const app = express()
app.get('/2589', handler2589)
app.listen(3000, () => {})
        