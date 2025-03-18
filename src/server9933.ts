
const express = require('express')
import {handler9933} from "./handler9933";
const app = express()
app.get('/9933', handler9933)
app.listen(3000, () => {})
        