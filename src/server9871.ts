
const express = require('express')
import {handler9871} from "./handler9871";
const app = express()
app.get('/9871', handler9871)
app.listen(3000, () => {})
        