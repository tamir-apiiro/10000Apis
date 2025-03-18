
const express = require('express')
import {handler3627} from "./handler3627";
const app = express()
app.get('/3627', handler3627)
app.listen(3000, () => {})
        