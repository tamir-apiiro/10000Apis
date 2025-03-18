
const express = require('express')
import {handler3136} from "./handler3136";
const app = express()
app.get('/3136', handler3136)
app.listen(3000, () => {})
        