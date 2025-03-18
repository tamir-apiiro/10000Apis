
const express = require('express')
import {handler2180} from "./handler2180";
const app = express()
app.get('/2180', handler2180)
app.listen(3000, () => {})
        