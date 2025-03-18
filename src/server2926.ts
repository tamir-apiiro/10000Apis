
const express = require('express')
import {handler2926} from "./handler2926";
const app = express()
app.get('/2926', handler2926)
app.listen(3000, () => {})
        