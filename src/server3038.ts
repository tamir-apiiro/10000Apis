
const express = require('express')
import {handler3038} from "./handler3038";
const app = express()
app.get('/3038', handler3038)
app.listen(3000, () => {})
        