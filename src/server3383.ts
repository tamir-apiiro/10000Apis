
const express = require('express')
import {handler3383} from "./handler3383";
const app = express()
app.get('/3383', handler3383)
app.listen(3000, () => {})
        