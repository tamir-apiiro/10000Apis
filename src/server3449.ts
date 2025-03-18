
const express = require('express')
import {handler3449} from "./handler3449";
const app = express()
app.get('/3449', handler3449)
app.listen(3000, () => {})
        