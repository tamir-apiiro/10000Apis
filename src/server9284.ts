
const express = require('express')
import {handler9284} from "./handler9284";
const app = express()
app.get('/9284', handler9284)
app.listen(3000, () => {})
        