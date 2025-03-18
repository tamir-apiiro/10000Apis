
const express = require('express')
import {handler9878} from "./handler9878";
const app = express()
app.get('/9878', handler9878)
app.listen(3000, () => {})
        