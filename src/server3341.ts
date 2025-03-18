
const express = require('express')
import {handler3341} from "./handler3341";
const app = express()
app.get('/3341', handler3341)
app.listen(3000, () => {})
        