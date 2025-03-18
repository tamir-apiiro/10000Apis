
const express = require('express')
import {handler3984} from "./handler3984";
const app = express()
app.get('/3984', handler3984)
app.listen(3000, () => {})
        