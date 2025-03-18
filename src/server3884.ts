
const express = require('express')
import {handler3884} from "./handler3884";
const app = express()
app.get('/3884', handler3884)
app.listen(3000, () => {})
        