
const express = require('express')
import {handler233} from "./handler233";
const app = express()
app.get('/233', handler233)
app.listen(3000, () => {})
        