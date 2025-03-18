
const express = require('express')
import {handler9984} from "./handler9984";
const app = express()
app.get('/9984', handler9984)
app.listen(3000, () => {})
        