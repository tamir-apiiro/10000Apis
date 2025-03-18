
const express = require('express')
import {handler3274} from "./handler3274";
const app = express()
app.get('/3274', handler3274)
app.listen(3000, () => {})
        