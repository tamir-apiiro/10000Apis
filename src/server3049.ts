
const express = require('express')
import {handler3049} from "./handler3049";
const app = express()
app.get('/3049', handler3049)
app.listen(3000, () => {})
        