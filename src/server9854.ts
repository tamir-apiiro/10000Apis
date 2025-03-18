
const express = require('express')
import {handler9854} from "./handler9854";
const app = express()
app.get('/9854', handler9854)
app.listen(3000, () => {})
        