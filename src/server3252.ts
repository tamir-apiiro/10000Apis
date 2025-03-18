
const express = require('express')
import {handler3252} from "./handler3252";
const app = express()
app.get('/3252', handler3252)
app.listen(3000, () => {})
        