
const express = require('express')
import {handler9221} from "./handler9221";
const app = express()
app.get('/9221', handler9221)
app.listen(3000, () => {})
        