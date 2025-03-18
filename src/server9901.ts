
const express = require('express')
import {handler9901} from "./handler9901";
const app = express()
app.get('/9901', handler9901)
app.listen(3000, () => {})
        