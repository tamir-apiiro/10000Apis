
const express = require('express')
import {handler3439} from "./handler3439";
const app = express()
app.get('/3439', handler3439)
app.listen(3000, () => {})
        