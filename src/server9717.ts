
const express = require('express')
import {handler9717} from "./handler9717";
const app = express()
app.get('/9717', handler9717)
app.listen(3000, () => {})
        