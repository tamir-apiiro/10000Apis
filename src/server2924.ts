
const express = require('express')
import {handler2924} from "./handler2924";
const app = express()
app.get('/2924', handler2924)
app.listen(3000, () => {})
        