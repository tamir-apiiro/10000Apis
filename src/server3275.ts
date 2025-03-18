
const express = require('express')
import {handler3275} from "./handler3275";
const app = express()
app.get('/3275', handler3275)
app.listen(3000, () => {})
        