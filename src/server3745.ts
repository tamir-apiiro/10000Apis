
const express = require('express')
import {handler3745} from "./handler3745";
const app = express()
app.get('/3745', handler3745)
app.listen(3000, () => {})
        