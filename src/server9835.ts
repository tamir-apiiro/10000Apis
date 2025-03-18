
const express = require('express')
import {handler9835} from "./handler9835";
const app = express()
app.get('/9835', handler9835)
app.listen(3000, () => {})
        