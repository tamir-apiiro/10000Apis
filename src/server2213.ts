
const express = require('express')
import {handler2213} from "./handler2213";
const app = express()
app.get('/2213', handler2213)
app.listen(3000, () => {})
        