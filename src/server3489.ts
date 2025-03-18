
const express = require('express')
import {handler3489} from "./handler3489";
const app = express()
app.get('/3489', handler3489)
app.listen(3000, () => {})
        