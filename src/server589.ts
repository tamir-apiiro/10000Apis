
const express = require('express')
import {handler589} from "./handler589";
const app = express()
app.get('/589', handler589)
app.listen(3000, () => {})
        