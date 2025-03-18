
const express = require('express')
import {handler3385} from "./handler3385";
const app = express()
app.get('/3385', handler3385)
app.listen(3000, () => {})
        