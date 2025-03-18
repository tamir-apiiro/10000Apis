
const express = require('express')
import {handler3486} from "./handler3486";
const app = express()
app.get('/3486', handler3486)
app.listen(3000, () => {})
        