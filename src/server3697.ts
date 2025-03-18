
const express = require('express')
import {handler3697} from "./handler3697";
const app = express()
app.get('/3697', handler3697)
app.listen(3000, () => {})
        