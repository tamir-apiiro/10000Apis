
const express = require('express')
import {handler3434} from "./handler3434";
const app = express()
app.get('/3434', handler3434)
app.listen(3000, () => {})
        