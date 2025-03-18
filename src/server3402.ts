
const express = require('express')
import {handler3402} from "./handler3402";
const app = express()
app.get('/3402', handler3402)
app.listen(3000, () => {})
        