
const express = require('express')
import {handler2930} from "./handler2930";
const app = express()
app.get('/2930', handler2930)
app.listen(3000, () => {})
        