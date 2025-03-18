
const express = require('express')
import {handler3176} from "./handler3176";
const app = express()
app.get('/3176', handler3176)
app.listen(3000, () => {})
        