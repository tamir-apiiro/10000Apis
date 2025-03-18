
const express = require('express')
import {handler2617} from "./handler2617";
const app = express()
app.get('/2617', handler2617)
app.listen(3000, () => {})
        