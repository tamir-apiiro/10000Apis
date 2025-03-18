
const express = require('express')
import {handler3143} from "./handler3143";
const app = express()
app.get('/3143', handler3143)
app.listen(3000, () => {})
        