
const express = require('express')
import {handler3114} from "./handler3114";
const app = express()
app.get('/3114', handler3114)
app.listen(3000, () => {})
        