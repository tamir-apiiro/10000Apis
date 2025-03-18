
const express = require('express')
import {handler3907} from "./handler3907";
const app = express()
app.get('/3907', handler3907)
app.listen(3000, () => {})
        