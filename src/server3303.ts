
const express = require('express')
import {handler3303} from "./handler3303";
const app = express()
app.get('/3303', handler3303)
app.listen(3000, () => {})
        