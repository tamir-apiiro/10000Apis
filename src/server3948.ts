
const express = require('express')
import {handler3948} from "./handler3948";
const app = express()
app.get('/3948', handler3948)
app.listen(3000, () => {})
        