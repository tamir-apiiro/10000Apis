
const express = require('express')
import {handler3089} from "./handler3089";
const app = express()
app.get('/3089', handler3089)
app.listen(3000, () => {})
        