
const express = require('express')
import {handler2143} from "./handler2143";
const app = express()
app.get('/2143', handler2143)
app.listen(3000, () => {})
        