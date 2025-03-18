
const express = require('express')
import {handler3817} from "./handler3817";
const app = express()
app.get('/3817', handler3817)
app.listen(3000, () => {})
        