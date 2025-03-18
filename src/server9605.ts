
const express = require('express')
import {handler9605} from "./handler9605";
const app = express()
app.get('/9605', handler9605)
app.listen(3000, () => {})
        