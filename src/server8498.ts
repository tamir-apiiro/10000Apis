
const express = require('express')
import {handler8498} from "./handler8498";
const app = express()
app.get('/8498', handler8498)
app.listen(3000, () => {})
        