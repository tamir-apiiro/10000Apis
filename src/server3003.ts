
const express = require('express')
import {handler3003} from "./handler3003";
const app = express()
app.get('/3003', handler3003)
app.listen(3000, () => {})
        