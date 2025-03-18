
const express = require('express')
import {handler2908} from "./handler2908";
const app = express()
app.get('/2908', handler2908)
app.listen(3000, () => {})
        