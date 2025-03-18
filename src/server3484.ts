
const express = require('express')
import {handler3484} from "./handler3484";
const app = express()
app.get('/3484', handler3484)
app.listen(3000, () => {})
        