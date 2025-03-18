
const express = require('express')
import {handler3440} from "./handler3440";
const app = express()
app.get('/3440', handler3440)
app.listen(3000, () => {})
        