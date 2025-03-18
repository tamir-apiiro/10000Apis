
const express = require('express')
import {handler3737} from "./handler3737";
const app = express()
app.get('/3737', handler3737)
app.listen(3000, () => {})
        