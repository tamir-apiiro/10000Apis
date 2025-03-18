
const express = require('express')
import {handler2940} from "./handler2940";
const app = express()
app.get('/2940', handler2940)
app.listen(3000, () => {})
        