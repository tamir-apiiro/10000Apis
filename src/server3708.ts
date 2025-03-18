
const express = require('express')
import {handler3708} from "./handler3708";
const app = express()
app.get('/3708', handler3708)
app.listen(3000, () => {})
        