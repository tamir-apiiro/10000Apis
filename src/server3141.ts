
const express = require('express')
import {handler3141} from "./handler3141";
const app = express()
app.get('/3141', handler3141)
app.listen(3000, () => {})
        