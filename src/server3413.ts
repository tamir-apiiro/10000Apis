
const express = require('express')
import {handler3413} from "./handler3413";
const app = express()
app.get('/3413', handler3413)
app.listen(3000, () => {})
        