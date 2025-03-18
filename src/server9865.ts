
const express = require('express')
import {handler9865} from "./handler9865";
const app = express()
app.get('/9865', handler9865)
app.listen(3000, () => {})
        