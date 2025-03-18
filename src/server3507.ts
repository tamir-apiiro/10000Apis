
const express = require('express')
import {handler3507} from "./handler3507";
const app = express()
app.get('/3507', handler3507)
app.listen(3000, () => {})
        