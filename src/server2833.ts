
const express = require('express')
import {handler2833} from "./handler2833";
const app = express()
app.get('/2833', handler2833)
app.listen(3000, () => {})
        