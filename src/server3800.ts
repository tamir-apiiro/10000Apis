
const express = require('express')
import {handler3800} from "./handler3800";
const app = express()
app.get('/3800', handler3800)
app.listen(3000, () => {})
        