
const express = require('express')
import {handler9375} from "./handler9375";
const app = express()
app.get('/9375', handler9375)
app.listen(3000, () => {})
        