
const express = require('express')
import {handler3476} from "./handler3476";
const app = express()
app.get('/3476', handler3476)
app.listen(3000, () => {})
        