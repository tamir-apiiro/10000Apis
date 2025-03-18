
const express = require('express')
import {handler2107} from "./handler2107";
const app = express()
app.get('/2107', handler2107)
app.listen(3000, () => {})
        