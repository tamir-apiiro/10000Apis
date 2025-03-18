
const express = require('express')
import {handler2967} from "./handler2967";
const app = express()
app.get('/2967', handler2967)
app.listen(3000, () => {})
        