
const express = require('express')
import {handler3054} from "./handler3054";
const app = express()
app.get('/3054', handler3054)
app.listen(3000, () => {})
        