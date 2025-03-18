
const express = require('express')
import {handler2398} from "./handler2398";
const app = express()
app.get('/2398', handler2398)
app.listen(3000, () => {})
        