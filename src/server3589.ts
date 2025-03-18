
const express = require('express')
import {handler3589} from "./handler3589";
const app = express()
app.get('/3589', handler3589)
app.listen(3000, () => {})
        