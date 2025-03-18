
const express = require('express')
import {handler3977} from "./handler3977";
const app = express()
app.get('/3977', handler3977)
app.listen(3000, () => {})
        