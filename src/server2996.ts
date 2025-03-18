
const express = require('express')
import {handler2996} from "./handler2996";
const app = express()
app.get('/2996', handler2996)
app.listen(3000, () => {})
        