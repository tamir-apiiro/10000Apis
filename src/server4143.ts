
const express = require('express')
import {handler4143} from "./handler4143";
const app = express()
app.get('/4143', handler4143)
app.listen(3000, () => {})
        