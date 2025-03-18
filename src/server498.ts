
const express = require('express')
import {handler498} from "./handler498";
const app = express()
app.get('/498', handler498)
app.listen(3000, () => {})
        