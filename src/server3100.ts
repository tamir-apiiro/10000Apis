
const express = require('express')
import {handler3100} from "./handler3100";
const app = express()
app.get('/3100', handler3100)
app.listen(3000, () => {})
        