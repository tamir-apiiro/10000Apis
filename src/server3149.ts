
const express = require('express')
import {handler3149} from "./handler3149";
const app = express()
app.get('/3149', handler3149)
app.listen(3000, () => {})
        