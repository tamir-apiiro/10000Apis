
const express = require('express')
import {handler3680} from "./handler3680";
const app = express()
app.get('/3680', handler3680)
app.listen(3000, () => {})
        