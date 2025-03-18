
const express = require('express')
import {handler9686} from "./handler9686";
const app = express()
app.get('/9686', handler9686)
app.listen(3000, () => {})
        