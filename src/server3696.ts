
const express = require('express')
import {handler3696} from "./handler3696";
const app = express()
app.get('/3696', handler3696)
app.listen(3000, () => {})
        