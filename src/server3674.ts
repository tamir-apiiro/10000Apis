
const express = require('express')
import {handler3674} from "./handler3674";
const app = express()
app.get('/3674', handler3674)
app.listen(3000, () => {})
        