
const express = require('express')
import {handler3899} from "./handler3899";
const app = express()
app.get('/3899', handler3899)
app.listen(3000, () => {})
        