
const express = require('express')
import {handler7143} from "./handler7143";
const app = express()
app.get('/7143', handler7143)
app.listen(3000, () => {})
        