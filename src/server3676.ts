
const express = require('express')
import {handler3676} from "./handler3676";
const app = express()
app.get('/3676', handler3676)
app.listen(3000, () => {})
        