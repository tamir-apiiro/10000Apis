
const express = require('express')
import {handler3355} from "./handler3355";
const app = express()
app.get('/3355', handler3355)
app.listen(3000, () => {})
        