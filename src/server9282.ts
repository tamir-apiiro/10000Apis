
const express = require('express')
import {handler9282} from "./handler9282";
const app = express()
app.get('/9282', handler9282)
app.listen(3000, () => {})
        