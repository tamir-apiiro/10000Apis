
const express = require('express')
import {handler3978} from "./handler3978";
const app = express()
app.get('/3978', handler3978)
app.listen(3000, () => {})
        