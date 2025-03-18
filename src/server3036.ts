
const express = require('express')
import {handler3036} from "./handler3036";
const app = express()
app.get('/3036', handler3036)
app.listen(3000, () => {})
        