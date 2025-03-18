
const express = require('express')
import {handler9039} from "./handler9039";
const app = express()
app.get('/9039', handler9039)
app.listen(3000, () => {})
        