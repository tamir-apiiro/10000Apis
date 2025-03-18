
const express = require('express')
import {handler9687} from "./handler9687";
const app = express()
app.get('/9687', handler9687)
app.listen(3000, () => {})
        