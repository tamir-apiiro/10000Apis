
const express = require('express')
import {handler3605} from "./handler3605";
const app = express()
app.get('/3605', handler3605)
app.listen(3000, () => {})
        