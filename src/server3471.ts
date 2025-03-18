
const express = require('express')
import {handler3471} from "./handler3471";
const app = express()
app.get('/3471', handler3471)
app.listen(3000, () => {})
        