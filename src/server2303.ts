
const express = require('express')
import {handler2303} from "./handler2303";
const app = express()
app.get('/2303', handler2303)
app.listen(3000, () => {})
        