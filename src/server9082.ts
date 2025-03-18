
const express = require('express')
import {handler9082} from "./handler9082";
const app = express()
app.get('/9082', handler9082)
app.listen(3000, () => {})
        