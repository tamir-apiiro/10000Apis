
const express = require('express')
import {handler9964} from "./handler9964";
const app = express()
app.get('/9964', handler9964)
app.listen(3000, () => {})
        