
const express = require('express')
import {handler2848} from "./handler2848";
const app = express()
app.get('/2848', handler2848)
app.listen(3000, () => {})
        