
const express = require('express')
import {handler9464} from "./handler9464";
const app = express()
app.get('/9464', handler9464)
app.listen(3000, () => {})
        