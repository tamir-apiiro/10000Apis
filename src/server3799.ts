
const express = require('express')
import {handler3799} from "./handler3799";
const app = express()
app.get('/3799', handler3799)
app.listen(3000, () => {})
        