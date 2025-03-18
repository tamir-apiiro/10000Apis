
const express = require('express')
import {handler9759} from "./handler9759";
const app = express()
app.get('/9759', handler9759)
app.listen(3000, () => {})
        