
const express = require('express')
import {handler2279} from "./handler2279";
const app = express()
app.get('/2279', handler2279)
app.listen(3000, () => {})
        