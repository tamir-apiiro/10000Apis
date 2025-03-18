
const express = require('express')
import {handler2498} from "./handler2498";
const app = express()
app.get('/2498', handler2498)
app.listen(3000, () => {})
        