
const express = require('express')
import {handler3709} from "./handler3709";
const app = express()
app.get('/3709', handler3709)
app.listen(3000, () => {})
        