
const express = require('express')
import {handler3882} from "./handler3882";
const app = express()
app.get('/3882', handler3882)
app.listen(3000, () => {})
        