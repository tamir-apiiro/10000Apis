
const express = require('express')
import {handler3482} from "./handler3482";
const app = express()
app.get('/3482', handler3482)
app.listen(3000, () => {})
        