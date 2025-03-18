
const express = require('express')
import {handler3500} from "./handler3500";
const app = express()
app.get('/3500', handler3500)
app.listen(3000, () => {})
        