
const express = require('express')
import {handler3170} from "./handler3170";
const app = express()
app.get('/3170', handler3170)
app.listen(3000, () => {})
        