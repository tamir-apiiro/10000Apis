
const express = require('express')
import {handler3490} from "./handler3490";
const app = express()
app.get('/3490', handler3490)
app.listen(3000, () => {})
        