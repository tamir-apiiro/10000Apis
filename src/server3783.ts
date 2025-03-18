
const express = require('express')
import {handler3783} from "./handler3783";
const app = express()
app.get('/3783', handler3783)
app.listen(3000, () => {})
        