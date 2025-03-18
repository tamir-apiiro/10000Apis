
const express = require('express')
import {handler7498} from "./handler7498";
const app = express()
app.get('/7498', handler7498)
app.listen(3000, () => {})
        