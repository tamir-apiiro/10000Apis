
const express = require('express')
import {handler3728} from "./handler3728";
const app = express()
app.get('/3728', handler3728)
app.listen(3000, () => {})
        