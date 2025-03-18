
const express = require('express')
import {handler3551} from "./handler3551";
const app = express()
app.get('/3551', handler3551)
app.listen(3000, () => {})
        