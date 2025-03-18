
const express = require('express')
import {handler9253} from "./handler9253";
const app = express()
app.get('/9253', handler9253)
app.listen(3000, () => {})
        