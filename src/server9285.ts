
const express = require('express')
import {handler9285} from "./handler9285";
const app = express()
app.get('/9285', handler9285)
app.listen(3000, () => {})
        