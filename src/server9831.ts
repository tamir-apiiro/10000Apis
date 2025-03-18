
const express = require('express')
import {handler9831} from "./handler9831";
const app = express()
app.get('/9831', handler9831)
app.listen(3000, () => {})
        