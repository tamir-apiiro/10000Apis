
const express = require('express')
import {handler3443} from "./handler3443";
const app = express()
app.get('/3443', handler3443)
app.listen(3000, () => {})
        