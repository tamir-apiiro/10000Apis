
const express = require('express')
import {handler2987} from "./handler2987";
const app = express()
app.get('/2987', handler2987)
app.listen(3000, () => {})
        