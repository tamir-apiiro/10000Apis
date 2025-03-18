
const express = require('express')
import {handler8143} from "./handler8143";
const app = express()
app.get('/8143', handler8143)
app.listen(3000, () => {})
        