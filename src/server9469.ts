
const express = require('express')
import {handler9469} from "./handler9469";
const app = express()
app.get('/9469', handler9469)
app.listen(3000, () => {})
        