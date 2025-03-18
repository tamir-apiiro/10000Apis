
const express = require('express')
import {handler2516} from "./handler2516";
const app = express()
app.get('/2516', handler2516)
app.listen(3000, () => {})
        