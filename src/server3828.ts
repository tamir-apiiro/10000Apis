
const express = require('express')
import {handler3828} from "./handler3828";
const app = express()
app.get('/3828', handler3828)
app.listen(3000, () => {})
        