
const express = require('express')
import {handler9586} from "./handler9586";
const app = express()
app.get('/9586', handler9586)
app.listen(3000, () => {})
        