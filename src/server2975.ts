
const express = require('express')
import {handler2975} from "./handler2975";
const app = express()
app.get('/2975', handler2975)
app.listen(3000, () => {})
        