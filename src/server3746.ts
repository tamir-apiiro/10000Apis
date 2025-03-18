
const express = require('express')
import {handler3746} from "./handler3746";
const app = express()
app.get('/3746', handler3746)
app.listen(3000, () => {})
        