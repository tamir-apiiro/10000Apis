
const express = require('express')
import {handler3122} from "./handler3122";
const app = express()
app.get('/3122', handler3122)
app.listen(3000, () => {})
        