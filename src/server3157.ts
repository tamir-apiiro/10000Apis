
const express = require('express')
import {handler3157} from "./handler3157";
const app = express()
app.get('/3157', handler3157)
app.listen(3000, () => {})
        